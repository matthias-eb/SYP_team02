const express = require('express');
const router = express.Router();

const authService = require('../controller/authentification');
const User = require('./../models/user');

//
// ONLY FOR TESTING
// NOT AVALIBLE IN PRODUCTION MODE
//

// DELETE a user
router.delete('/user/:id', authService.checkAuth, function(req, res, next) {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.json({
      msg: 'User deleted.'
    });
  }).catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;
