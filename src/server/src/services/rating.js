const Rating = require('../models/rating');


/**
 * Get all user ratings.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns all user ratings or error
 */
function getUserRating(req, res, next) {
  if (!req.body.id) {
    return res.status(400).json({
      msg: 'Bad data. id (user id) is missing'
    });
  }

  Rating.findAll({
    where: {
      user_id: req.body.id
    }
  }).then(rating => {
    res.status(200).json({
      'data': rating
    });
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}


/**
 * Get all ecar ratings.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns all ecar ratings or error
 */
function getAutoRating(req, res, next) {
  if (!req.body.id) {
    return res.status(400).json({
      msg: 'Bad data. id (ecar id) is missing'
    });
  }

  Rating.findAll({
    where: {
      ecar_id: req.body.id
    }
  }).then(rating => {
    res.status(200).json({
      'data': rating
    });
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}


/**
 * Set rating for a ecar from by a specific user.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns success msg or error.
 */
function setUserRating(req, res, next) {
  if (!req.body.userId || !req.body.autoId || !req.body.rating) {
    return res.status(400).json({
      msg: 'Bad data. userId and/or autoId and/or rating are/is missing'
    });
  }

  Rating.create({
    user_id: req.body.userId,
    ecar_id: req.body.autoId,
    rating: req.body.rating
  }).then(rating => {
    res.status(201).json({
      data: rating
    });
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}


module.exports = {
  getUserRating: getUserRating,
  getAutoRating: getAutoRating,
  setUserRating: setUserRating
};
