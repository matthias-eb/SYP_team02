/**
 * Filter:
 *   ID: 1
 *   name: abs (german: ABS)
 *   description: filter to (un)set ecars with abs.
 *   data-example: { data: '<abs>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for (un)set ecars with abs feature.
 *
 * @param abs 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(abs) {
  return { abs: abs };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
