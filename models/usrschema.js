const mongoose = require('mongoose');

const userschemas = new mongoose.Schema(
  {
    // term: String,
    // definition: String
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
);
const userschema = mongoose.model('users', userschemas);
module.exports = userschema;