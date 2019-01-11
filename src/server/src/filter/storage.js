/**
 * Filter:
 *   ID: 17
 *   name: storage (german: Laderaum)
 *   description: filter ecar with min storage.
 *   data-example: { data: '<seats>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with min storage.
 *
 * @param storage min storage
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(storage) {
  return { storage: { gte: storage } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
