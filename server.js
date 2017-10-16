var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./api/routes/routes');

//DB setup and connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tododb');

// app setup
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

// server setup
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server is up on: ' + port);
