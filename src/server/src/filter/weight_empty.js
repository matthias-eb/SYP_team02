/**
 * Filter:
 *   ID: 19
 *   name: weight_empty (german: Leergewicht)
 *   description: filter weight empty by maximal value
 *   data-example: { data: '<weight-empty>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the maximal weight empty value.
 *
 * @param weightEmpty maximal weight empty value
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(weightEmpty) {
  return { weight_empty: { lte: weightEmpty } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
