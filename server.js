const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Group10');
}

app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.use(express.json());

//import Intakeform schema
let IntakeForm = require('./intakeform');

//view all
app.get('/view', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  IntakeForm.find((error, data) => {
      if (error) {
        //here we are using a call to next() to send an error message back
        return next(error)
      } else {
        res.json(data)
      }
    })
});
//view by id


//create
app.post('/create', (req, res, next) => {
  console.log(req.body);
    IntakeForm.create(req.body, (error, data) => {
        if (error) {
          console.log(error)
        } else {
          // res.json(data)
          res.send(req.body);
        }
  })});
//delete
  app.delete('/delete/:id', (req, res, next) => {
    //mongoose will use _id of document
    IntakeForm.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          console.log(error)
        } else {
          res.status(200).json({
            msg: data
          })
        }
       });
});
//update (needs to be revisionist)
app.put('/update/:id', (req, res, next) => {
  IntakeForm.findByIdAndUpdate(req.params.id , {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Student is edited via PUT');
        console.log('Student successfully updated!', data)
      }
    })
});