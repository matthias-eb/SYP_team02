/**
 * Filter:
 *   ID: 33
 *   name: cruisecontrol (german: Tempomat)
 *   description: filter ecars with/without cruise control.
 *   data-example: { data: '<cruisecontrol>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without cruise control
 *
 * @param cruiseControl 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(cruiseControl) {
  return { cruisecontrol: cruiseControl };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
