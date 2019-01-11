/**
 * Filter:
 *   ID: 16
 *   name: airCon (german: Klimaanlage)
 *   description: filter to (un)set ecars with air conndition.
 *   data-example: { data: '<air conndition>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without air conndition
 *
 * @param airCon 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(airCon) {
  return { airCon: airCon };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
