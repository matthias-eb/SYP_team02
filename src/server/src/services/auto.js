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
    include: [ Rating ],
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
  const DEFAULT_LIMIT = 12;
  
  Auto.findAll({
    include: [ Rating ],
    order: [ [{ model: Rating }, 'rating', 'DESC'], ['id', 'DESC'] ],
    where: { visibility: 1 }
  }).then(autos => {
    autos = sortByAverageAndRemoveRatingless(autos);
    res.status(200).json({
      'data': autos.slice(0, req.body.limit || DEFAULT_LIMIT)
    });
    //console.log(JSON.stringify(autos.slice(0, req.body.limit || DEFAULT_LIMIT)));
  }).catch(err => {
    console.error(err);
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}

/**
 * Calculate rating average.
 * 
 * @param autos Array of auto entites
 */
function removeRatingless(autos) {
  for (let i = 0; i < autos.length; i++) {
    if (autos[i].ratings.length < 1) {
      autos.splice(i, 1);
      i--;
    }
  }
  return autos;
}

/**
 * Remove ratingsless autos and sort by rating.
 * 
 * @param autos Array of auto entites
 */
function sortByAverageAndRemoveRatingless(autos) {
  autos = removeRatingless(autos);
  autos.sort((a, b) => calcAverage(a) - calcAverage(b));
  return autos;
}

function calcAverage(auto) {
  let ratingAverage = 0;
  for (let n = 0; n < auto.ratings.length; n++) {
    ratingAverage += auto.ratings[n].rating;
  }
  ratingAverage /= auto.ratings.length;
  return ratingAverage;
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
  let whereArr = [ { visibility: 1 } ];
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
