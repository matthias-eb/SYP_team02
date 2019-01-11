/**
 * Filter:
 *   ID: 6
 *   name: acceleration (german: Beschleunigung)
 *   description: filter ecar with min acceleration.
 *   data-example: { data: '<acceleration>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with min acceleration.
 *
 * @param acceleration min acceleration
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(acceleration) {
  return { acceleration: { lte: acceleration } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
