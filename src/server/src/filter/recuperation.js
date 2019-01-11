/**
 * Filter:
 *   ID: 27
 *   name: recuperation (german: Rekuperation)
 *   description: filter ecars with/without recuperation.
 *   data-example: { data: '<recuperation>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without recuperation
 *
 * @param recuperation 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(recuperation) {
  return { recuperation: recuperation };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
