const express = require('express');
const pgroutr = express.Router();
const Usrchma = require('../models/usrschema');
const pages = require('../pages');


pgroutr.post('/', function(request, response){
  const email = request.body.emailreg;
  const passw = request.body.passwordreg;

  const newuser = new Usrchma(
    {
      email: email,
      password: passw,
      status: 'offline'
    }
  );

  var obj = {emaill: email, passwr: passw}
    // docs is an array
    newuser.save(function (err, newuser){
      if (err) return console.error(err);
      console.log('document added to collection')
      response.render("registered", obj)
    })
})


pgroutr.post('/', function(request, response){
  const emailog = request.body.email;
  const passwlog = request.body.password;
  console.log(emailog)
  const loginuser = new Usrchma(
    {
      email: emailog,
      password: passwlog,
      status: 'online'
    }
  );
  var self = this;
  var obj = {emaill: emailog}

  Usrchma.find({'email': self.email, 'password': self.password}, function (err, docs) {
    if (!self.email){
        console.log('account not found')
    }else{                
      console.log('user exists: ',self.email);
        response.render("profile", obj)
    }
});
})

module.exports = pgroutr;