/**
 * Filter:
 *   ID: 23
 *   name: nav (german: Navi)
 *   description: filter ecars with/without nav.
 *   data-example: { data: '<nav>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without nav
 *
 * @param nav 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(nav) {
  return { nav: nav };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
