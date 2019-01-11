/**
 * Filter:
 *   ID: 24
 *   name: parkinghelp (german: Parkhilfe)
 *   description: filter ecars with/without parking help.
 *   data-example: { data: '<parking-help>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without parking help
 *
 * @param parkingHelp 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(parkingHelp) {
  return { parkinghelp: parkingHelp };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
