const Filter = require('../models/filter');

/**
 * Get all filter.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns all filter from database
 */
function getFilter(req, res, next) {
  Filter.findAll().then(filter => {
    res.status(200).send(JSON.stringify({
      data: filter
    }, null, 2));
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}

module.exports = {
  getFilter: getFilter
};