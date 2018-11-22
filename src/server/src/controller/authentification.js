const jwt    = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User   = require('../models/user');


/**
 * Check if reqest is user authentificated.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger if authentification is successful
 *
 * @returns if authentification is successful trigger next; other response error
 */
function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'secret');
    req.userData = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({
      msg: 'Authentification failed.',
      error: err
    });
  }
}


/**
 * Log user in.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns if login is successful user id and name as object; other response error
 */
function login(req, res, next) {
  if (!req.body.name || !req.body.pwd) {
    return res.status(400).json({
      msg: 'Username or password not set.'
    });
  }

  User.findOne({
    where: {
      name: req.body.name
    }
  }).then(user => {
    if (!user) {
      return res.status(409).json({
        msg: 'Username not found.'
      });
    }

    bcrypt.compare(req.body.pwd, user.pwd, (err, result) => {
      if (!result) {
        return res.status(401).json({
          msg: 'Login failed. Username or password is wrong.',
          error: err
        });
      }

      let token = jwt.sign({
        id: user.id,
        name: user.name
      }, 'secret', {
        expiresIn: "2h"
      });
      return res.status(200).json({
        msg: 'Login successful.',
        token: token,
        user: {
          id: user.id,
          name: user.name
        }
      });
    });
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}


/**
 * Register user.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns if register is successful registered user; other response error
 */
function register(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.pwd) {
    return res.status(400).json({
      msg: 'Bad data. Required are: Username, email and (hashed) password.'
    });
  }
  
  User.findOne({
    where: {
      name: req.body.name
    }
  }).then(user => {
    if (user) {
      return res.status(409).json({
        msg: 'Username already exists.'
      });
    }

    bcrypt.hash(req.body.pwd, 2, (err, hash) => {
      if (err) {
        return res.status(500).json({
          msg: err.message,
          error: err
        });
      }

      User.create({
        name: req.body.name,
        email: req.body.email,
        pwd: hash
      }).then(user => {
        res.status(201).json({
          msg: 'User successful registered.',
          user: user
        });
      }).catch(err => {
        res.status(500).json({
          msg: err.message,
          error: err
        });
      });
    });
  });
}


module.exports = {
  checkAuth: checkAuth,
  login: login,
  register: register
};
