/**
 * Filter:
 *   ID: 30
 *   name: seat_material (german: Sitzmaterial)
 *   description: filter ecar with seat material.
 *   data-example: { data: '<seat-material>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with seat material.
 *
 * @param seatMaterial seat material
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(seatMaterial) {
  return { seat_material: seatMaterial };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
