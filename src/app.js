var express = require('express');
var path = require('path');
var logger = require('morgan');
var updateSensor = require('./routes/update-sensor');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use('/update-sensor', updateSensor);

app.use(function(err, req, res, next) {
  console.error(err);
  res.sendStatus(err.status || 500);
});

module.exports = app;
