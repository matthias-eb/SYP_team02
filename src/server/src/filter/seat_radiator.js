/**
 * Filter:
 *   ID: 29
 *   name: seat_radiator (german: Sitzheizung)
 *   description: filter ecars with/without seat radiator.
 *   data-example: { data: '<seat-radiator>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without seat radiator
 *
 * @param seatRadiator 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(seatRadiator) {
  return { seat_radiator: seatRadiator };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
