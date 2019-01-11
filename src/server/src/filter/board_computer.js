/**
 * Filter:
 *   ID: 8
 *   name: board_computer (german: Bordcomputer)
 *   description: filter ecars with/without board computer.
 *   data-example: { data: '<board-computer>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without board computer
 *
 * @param bluetooth 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(bluetooth) {
  return { board_computer: bluetooth };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
