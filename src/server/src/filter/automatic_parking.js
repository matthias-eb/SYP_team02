/**
 * Filter:
 *   ID: 2
 *   name: automatic_parking (german: Autoparkfunktion)
 *   description: filter to (un)set ecars with an automatic parking feature.
 *   data-example: { data: '<automatic_parking>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for (un)set ecars with an automatic parking feature.
 *
 * @param automaticParking 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(automaticParking) {
  return { automatic_parking: automaticParking };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
