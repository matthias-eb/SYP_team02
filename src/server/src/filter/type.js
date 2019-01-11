/**
 * Filter:
 *   ID: 34
 *   name: type (german: Typ)
 *   description: filter ecar type
 *   data-example: { data: '<type>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar type.
 *
 * @param type ecar type
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(type) {
  return { type: type };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
