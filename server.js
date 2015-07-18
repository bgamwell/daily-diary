// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    User = require('./models/user'),
    Log = require('./models/log');

// connect to mongodb
mongoose.connect('mongodb://localhost/daily-diary');

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// STATIC ROUTES

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/views/index.html'); // send index.html to localhost:3000 as the homepage
});

// log in
app.post('/login', function (req, res) { //login route post works with postman
  var userData = req.body.user;
  res.json(userData);
});

// sign up
app.post('/users', function (req, res) { //signup route works with postman
  var userLogin = req.body.user;
  res.json(userLogin);
});

app.get('/profile', function (req, res) {
  //should render all posts from a particular user
});

// create an api/profile route so users can access their information from elsewhere via an api, as long as they're logged in


// listen on port 3000
app.listen(3000, function(){
  console.log('Server started on localhost:3000');
});
