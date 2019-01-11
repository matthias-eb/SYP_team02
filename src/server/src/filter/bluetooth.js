/**
 * Filter:
 *   ID: 7
 *   name: bluetooth (german: Bluetooth)
 *   description: filter ecars with/without bluetooth.
 *   data-example: { data: '<bluetooth>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without bluetooth
 *
 * @param bluetooth 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(bluetooth) {
  return { bluetooth: bluetooth };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
