const express = require('express');
const app = express();
const port = 3000
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  var IntakeForm = new mongoose.Schema({
    CaseNum: Number,
    ClientNum: Number,
    StartDate: Date,
    CloseDate: Date,
  })
  
  var IntakeForm = mongoose.model('IntakeForm', IntakeForm)
  
  /*const silence = new IntakeForm({ name: 'Silence' });
console.log(silence.name); // 'Silence'

IntakeForm.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};*/

  /*const kittySchema = new mongoose.Schema({
    name: String
  });

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

await fluffy.save();
fluffy.speak();

const kittens = await Kitten.find();
console.log(kittens);

await Kitten.find({ name: /^fluff/ });
*/