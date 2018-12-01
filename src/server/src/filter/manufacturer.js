/**
 * Filter:
 *   ID: 1
 *   name: manufacturer (german: Hersteller)
 *   description: filter manufacturers by name
 *   data-example: { data: '<manufacturer-id>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the right manufacturer ID.
 *
 * @param id manufacturer id
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(id) {
  return { manufacturerId: id };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
