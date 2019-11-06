const mongoose = require('mongoose');

const userschemas = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  }
);
const userschema = mongoose.model('users', userschemas);
module.exports = userschema;