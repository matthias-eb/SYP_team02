/**
 * Filter:
 *   ID: 11
 *   name: window_lifter (german: Fensterheber)
 *   description: filter ecars with/without window lifter.
 *   data-example: { data: '<window-lifter>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without window lifter
 *
 * @param windowLifter 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(windowLifter) {
  return { window_lifter: windowLifter };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
