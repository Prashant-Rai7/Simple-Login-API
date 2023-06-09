const mongoose = require("mongoose");

const registration_data = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const signup_data = mongoose.model("signup_data", registration_data);

const document = new signup_data({ name: 'John', email: 'john@gmail.com', password: 'abcdef'});

document.save()
.then(() => {
  console.log("Document inserted")
}).catch((err) => {
  console.log("this is error......"+ err)
})

module.exports = signup_data;
