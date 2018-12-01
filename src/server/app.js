const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Import von Routen
const TESTINGONLYRoutes = require('./src/routes/TESTINGONLY');
const authRoutes = require('./src/routes/authentification');
const autoRoutes = require('./src/routes/auto');
const ratingRoutes = require('./src/routes/rating');

//Logging
app.use(morgan('dev'));

// Bodyparser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Add Header
app.use(function(req, res, next) {

  // Website you wish to allow to connect
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8200');
  //res.setHeader('Access-Control-Allow-Origin', req.getHeader("Origin"));
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// Routes
app.use('/TESTINGONLY', TESTINGONLYRoutes);
app.use('/', authRoutes);
app.use('/auto', autoRoutes);
app.use('/rating', ratingRoutes);


// Errorhandling
app.use((req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
