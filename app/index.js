//imports packages required to make the site and parse data to and from it
const express = require('express');
const hbs = require("express-handlebars");
const bodyParser = require('body-parser');
const path = require('path');
//imports my own routes file
const route = require('./routes');

//declares the port that the site can be accesed on
const port = 3030;

//Declares the app
var app = express();

//Tells app to use bodyParser
app.use(bodyParser.urlencoded({extended: true}))

// Register Handlebars view engine
app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

// Use Handlebars view engine
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

//use my routes file to route all requests
app.use(route);

//tells the app to listen on the port and prints that the server is up
app.listen(port, () => {
  console.log("Server has started");
});
