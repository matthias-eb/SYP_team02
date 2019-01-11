/**
 * Filter:
 *   ID: 35
 *   name: consumption (german: Verbrauch)
 *   description: filter consumption by maximal value
 *   data-example: { data: '<consumption>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the maximal consumption value.
 *
 * @param consumption maximal consumption value
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(consumption) {
  return { consumption: { lte: consumption } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
