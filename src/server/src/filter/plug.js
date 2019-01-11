/**
 * Filter:
 *   ID: 32
 *   name: plug (german: Stecker)
 *   description: filter plug type
 *   data-example: { data: '<plug>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter plug type.
 *
 * @param plug plug type
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(plug) {
  return { plug: plug };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
