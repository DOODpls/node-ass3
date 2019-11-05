const mongoose = require('mongoose');
require('dotenv').config()
const pages = require('./pages');
const bcrypt = require('bcrypt');
const usrschema = require('./models/usrschema');
const express = require('express');
const path = require('path');

const app = express();
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true,useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB Connected!!!');
});





app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))



app.get('/', function(request, response){
  response.render('index', pages.index)
})
app.post('/registered', function(request, response){

  const email = request.body.emailreg;
  const passw = request.body.passwordreg;

  const newuser = new usrschema(
    {
      email: email,
      password: passw,
      status: 'offline'
    }
  );

  const hashedpw = newuser.modifiedPaths(function(newsers){
    newsers.passw = bcrypt.hashSync
    (newsers.passw, 10)
    return newsers
  })

  var obj = {emaill: email, passwr: passw}
  newuser.save(function (err, hashedpw){
    hashedpw();
    if (err) return console.error(err);
    console.log('document added to collection')
  })
  response.render("registered", obj)
})


app.use(express.static(path.join(__dirname, 'assets')));

app.use(function (err, response) {
  console.error(err.stack)
  response.status(404).render('notfound');
})




const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on PORT ${PORT}`)
})