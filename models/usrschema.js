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

userschemas.pre('save', function (next) {
  var self = this;
  userschema.find({'email': self.email}, function (err, docs) {
      if (!docs.length){
          next();
      }else{                
          console.log('user exists: ',self.email);
          next(new Error("User exists!") );
      }
  });
}) ;

const userschema = mongoose.model('users', userschemas);
module.exports = userschema;