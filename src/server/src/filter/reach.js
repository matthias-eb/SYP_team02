/**
 * Filter:
 *   ID: 25
 *   name: reach (german: Reichweite)
 *   description: filter ecar with min reach.
 *   data-example: { data: '<reach>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with min reach.
 *
 * @param reach min reach
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(reach) {
  return { reach: { gte: reach } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
