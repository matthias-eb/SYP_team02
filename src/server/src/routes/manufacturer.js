const express = require('express');
const router = express.Router();

const authService = require('../controller/authentification');
const Manufacturer = require('./../models/manufacturer');

// GET all manufacturers
router.get('/', authService.checkAuth, function(req, res, next) {
  Manufacturer.findAll().then(manufacturer => {
    res.send(JSON.stringify({
      'data': manufacturer
    }, null, 4));
  }).catch(err => {
    res.send('error: ' + err);
  });
});

module.exports = router;
