/**
 * Filter:
 *   ID: 18
 *   name: leasing (german: Leasingpreis)
 *   description: filter leasing by maximal value
 *   data-example: { data: '<consumption>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the maximal leasing value.
 *
 * @param leasing maximal leasing value
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(leasing) {
  return { leasing: { lte: leasing } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
