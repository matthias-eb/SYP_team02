/**
 * Filter:
 *   ID: 20
 *   name: capacity (german: Leistung)
 *   description: filter capacity by minimal value
 *   data-example: { data: '<capacity>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the minimal capacity value.
 *
 * @param capacity minimal capacity value
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(capacity) {
  return { capacity: { gte: capacity } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
