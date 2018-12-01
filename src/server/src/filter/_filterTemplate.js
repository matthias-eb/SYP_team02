/**
 * Filter:
 *   ID: <FId>
 *   name: <name> (german: <german-name>)
 *   description: <short-description>
 *   data-example: { data: <data-object-from-req.body> }
 */

// List of sequelize operators
// https://github.com/sequelize/sequelize/blob/master/lib/dialects/abstract/query-generator/operators.js
// https://github.com/sequelize/sequelize/blob/master/lib/operators.js


/**
 * Build specific WHERE-clause object to filter.
 *
 * @param data data from data-example
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(data) {
  return { '<column-name>': data };
}


/**
 * Post SQL filtering.
 * 
 * @param cars ecar array from sql result
 * @param data data from data-example
 * 
 * @return post filtered data
 */
function postSqlFiltering(cars, data) {
  for (let i = 0; i < cars.length; i++) {
    const car = cars[i];

    // your condition to remove car from array
    if (car.xxx == data.yyy) {
      // remove this car
      cars.splice(i, 1);
    }
  }
}


/**
 * Export filter-modul-functions
 * 
 * Note: Export only the functions you need!!
 */
module.exports = {
  buildWhereClause: buildWhereClause,
  postSqlFiltering: postSqlFiltering
};
