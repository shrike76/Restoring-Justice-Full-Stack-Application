const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
require("dotenv").config();
const app = express();

let IntakeForm = require('./intakeform.js');
let Referrals = require('./referrals.js');

mongoose
  .connect(process.env.MONGO_URL)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const PORT = process.env.PORT || 3000; //Declare the port number

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

app.use(morgan({
  connectionString: 'mongodb://localhost:27017/logs-db'
}));

app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode



//POST/create/update //Handles revisions and creates new forms
app.post('/clients', (req, res, next) => {
  //Increments version id for existing forms
  if (req.body.IntakeFormID != null){
    req.body.IntakeFormVersion = ++req.body.IntakeFormVersion; 
    //creates a new form
    IntakeForm.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    });
  } else { //Handles creating new intake forms
    //Gets max IntakeFormID in database to set next form id 
    let GetMaxID = IntakeForm.findOne().sort({IntakeFormID: -1}).exec();
    GetMaxID.then(function(data){
      let maxID = data.IntakeFormID ?? 0; //Nullish Coalescing operator to handle an empty collection https://stackoverflow.com/questions/1011317/replace-a-value-if-null-or-undefined-in-javascript
      req.body.IntakeFormID = ++maxID; //Increments new form to next ID
      req.body.IntakeFormVersion = 1;  //Sets initial version for new form

      //creates an updated version
      IntakeForm.create(req.body, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      });
    });
  }
});

//GET /view all plus all versions
app.get('/clients', (req, res, next) => {
  IntakeForm.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//GET /view by form id
app.get('/clientsbyformid/:id', (req, res, next) => {
  IntakeForm.find({IntakeFormID: req.params.id}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//GET /view find by IntakeForm object id
app.get('/clients/:id', (req, res, next) => {
  IntakeForm.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//GET/view all by newest version
app.get('/clientslatest/', (req, res, next) => {

  //uses an aggregate function to get latest versions of each document. https://stackoverflow.com/questions/56083428/mongodb-get-all-entries-with-most-recent-revision
  IntakeForm.aggregate([
    //gets latest IntakeFormVersion for each IntakeFormID
    { $group : { _id: '$IntakeFormID','maxRevision':{'$max': '$IntakeFormVersion' }, "originalDocuments": { "$push": "$$ROOT" }}},
    {
      //gets entire document based on group by made above
      $project: {
        "originalDocument": {
          "$filter": {
            "input": "$originalDocuments",
            "as": "doc",
            "cond": {
              "$and": [
                { "$eq": ["$maxRevision", "$$doc.IntakeFormVersion"] }
              ]
            }
          }
        }
      }
    },
    {
      //https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/
      "$unwind": "$originalDocument"
    }
  ], (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data);
      }
  });
});

//PUT (functional delete)
app.put('/clients/:id', (req, res, next) => {
  //Functionally deletes by setting the IsActive field to false. 
  IntakeForm.findOneAndUpdate({_id: req.params.id}, {IsActive: false}, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('Form has been marked inactive');
    }
  })
});

//GET /view all referrals
app.get('/referrals', (req, res, next) => {
  Referrals.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//GET /view find by referral object id
app.get('/referrals/:id', (req, res, next) => {
  Referrals.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});

//POST /creates a referral
app.post('/referrals', (req, res, next) => {
  Referrals.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.send('Referral has been added to the database');
      }
  });
});

//PUT /updates a referral
app.put('/referrals/:id', (req, res, next) => {
  Referrals.findOneAndUpdate({ _id: req.params.id }, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Referral updated successfully');
      }
    })
});

//DELETE /deletes referral by id
app.delete('/referrals/:id', (req, res, next) => {
  Referrals.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
       }
     });
});


//error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode)
    err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});