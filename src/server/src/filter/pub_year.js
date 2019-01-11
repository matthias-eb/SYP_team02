/**
 * Filter:
 *   ID: 9
 *   name: pub_year (german: Erscheinungsjahr)
 *   description: filter publishing year geater then XXXX
 *   data-example: { data: '<year>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the ecars only since a specific year.
 *
 * @param year publishing year
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(year) {
  return { pub_year: { gte: year } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
