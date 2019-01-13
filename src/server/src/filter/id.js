/**
 * Filter:
 *   ID: 99
 *   name: id (german: EId)
 *   description: filter ecar id
 *   data-example: { data: '<ecar-id>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar id.
 *
 * @param id ecar id
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(id) {
  return { id: id };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
  