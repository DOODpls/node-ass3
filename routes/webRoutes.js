const express = require('express');
const pgroutr = express.Router();
const Usrchma = require('../models/usrschema.js');

pgroutr.post('/registered', function(request, response){

  const email = request.body.emailreg;
  const passw = request.body.passwordreg;

  const newuser = new Usrchma(
    {
      email: email,
      password: passw,
      status: 'offline'
    }
  );

  // const hashedpw = newuser.modifiedPaths(function(newsers){
  //   newsers.passw = bcrypt.hashSync
  //   (newsers.passw, 10)
  //   return newsers
  // })

  var obj = {emaill: email, passwr: passw}
  newuser.save(function (err, newuser){
    if (err) return console.error(err);
    console.log('document added to collection')
  })
  response.render("registered", obj)
})

module.exports = pgroutr;