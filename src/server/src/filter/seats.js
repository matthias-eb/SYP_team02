/**
 * Filter:
 *   ID: 28
 *   name: seats (german: Sitze)
 *   description: filter ecar with seat number.
 *   data-example: { data: '<seats>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with seat number.
 *
 * @param seats seat number
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(seats) {
  return { seats: seats };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
