const Auto = require('../models/ecar');
const Rating = require('../models/rating');
const Filter = require('../filter/_base');


/**
 * Get (filtered) ecars.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns (filtered) ecars or error.
 */
function getAuto(req, res, next) {
  Auto.findAll({
    where: buildWhereClause(req, res, next)
  }).then(auto => {
    res.status(200).json({
      'data': postSqlFiltering(auto, req, res, next)
    });
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}


/**
 * Get best rated ecars.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns best ecars or error.
 */
function getBestAutos(req, res, next) {
  const DEFAULT_LIMIT = 6;
  
  Auto.findAll({
    include: [ Rating ],
    order: [ [{ model: Rating }, 'rating', 'ASC'], ['id', 'ASC'] ]
  }).then(autos => {
    res.status(200).json({
      'data': autos.slice(0, req.body.limit || DEFAULT_LIMIT)
    });
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}


/**
 * Build specific WHERE-clause object to filter.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(req, res, next) {
  let whereArr = [ ];
  for (let id in req.body.filter) {
    if (typeof Filter[id].buildWhereClause === 'function') {
      whereArr.push(Filter[id].buildWhereClause(req.body.filter[id]));
    }
  }
  return whereArr.reduce(function(result, item) {
    const key = Object.keys(item)[0];
    result[key] = item[key];
    return result;
  }, {});
}


/**
 * Post SQL filtering.
 * 
 * @param data SQL result
 * 
 * @return post filtered data
 */
function postSqlFiltering(data, req, res, next) {
  for (let id in req.body.filter) {
    if (typeof Filter[id].postSqlFiltering === 'function') {
      data = Filter[id].postSqlFiltering(data, req.body.filter[i]);
    }
  }
  return data;
}


module.exports = {
  getAuto: getAuto,
  getBestAutos: getBestAutos
};
