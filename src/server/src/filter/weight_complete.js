/**
 * Filter:
 *   ID: 12
 *   name: weight_complete (german: Gesamtgewicht)
 *   description: filter weight complete by maximal value
 *   data-example: { data: '<weight-complete>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the maximal weight complete value.
 *
 * @param weightComplete maximal weight complete value
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(weightComplete) {
  return { weight_complete: { lte: weightComplete } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
