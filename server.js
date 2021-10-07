const express = require('express');
const port = 3000
const mongoose = require('mongoose');
const morgan = require("morgan");
require("dotenv").config();
const app = express();

let IntakeForm = require('./intakeform.js')


mongoose
  .connect(process.env.MONGO_URL)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const PORT = process.env.PORT || 3000; //Declare the port number

app.use(express.json()); //allows us to access request body as req.body
app.use(morgan("dev"));  //enable incoming request logging in dev mode



//POST
app.post('/clients', (req, res, next) => {

  IntakeForm.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      // res.json(data)
      res.send('health insurance is added to the database');
    }
  });
});

//GET
app.get('/clients', (req, res, next) => {
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


//DELETE
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



//UPDATE
app.put('/update/:id', (req, res, next) => {
  IntakeForm.findByIdAndUpdate(req.params.id, {
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


app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode)
    err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});





