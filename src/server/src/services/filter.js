const Filter = require('./../models/filter');
const db = require('./../database/database.js');

/**
 * Get all filters.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns all filters from database
 */
function getFilter(req, res, next) {
  Filter.findAll({
    where: { visibility: true }
  }).then(filters => {
    let actions = filters.map(prepareFilter);
    Promise.all(actions).then(filters => {
      res.status(200).send(JSON.stringify({
        data: filters
      }, null, 2));
    });
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}


/**
 * Get only main filters for main page.
 *
 * @param {object} req http(s) request object
 * @param {object} res http(s) response object
 * @param {function} next function to trigger next
 *
 * @returns main filters from database
 */
function getMainFilter(req, res, next) {
  Filter.findAll({
    where: {
      $and: [
        { visibility: 1 }
      ],
      $or: [
        { id: [ 1, 2, 3 ] }
      ]
    }
  }).then(filters => {
    let actions = filters.map(prepareFilter);
    Promise.all(actions).then(filters => {
      res.status(200).send(JSON.stringify({
        data: filters
      }, null, 2));
    });
  }).catch(err => {
    res.status(500).json({
      msg: err.message,
      error: err
    });
  });
}


/**
 * Prepare filter data.
 * 
 * @param {Filter} filter single filter object
 *
 * @returns filter with prepared data as promise.
 */
function prepareFilter(filter) {
  return new Promise((resolve, reject) => {
    let data = JSON.parse(filter.data);
    if (data.sql) {
      db.sequelize.query(data.sql, { type: db.sequelize.QueryTypes.SELECT }).then(data => {
        filter.data = data;
        resolve(filter);
      });
    }
    else if (data.code) {
      try {
        filter.data = eval(data.code);
        resolve(filter);
      } catch (error) {
        reject(error);
      }
    }
    else if (data) {
      filter.data = data;
      resolve(filter);
    }
    else {
      reject(new Error('unknown data in database.'));
    }
  });
}


module.exports = {
  getFilter: getFilter,
  getMainFilter: getMainFilter
};
