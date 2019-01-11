/**
 * Filter:
 *   ID: 10
 *   name: color (german: Farbe)
 *   description: filter ecar color
 *   data-example: { data: '<color>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar color.
 *
 * @param color ecar color
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(color) {
  return { color: color };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
