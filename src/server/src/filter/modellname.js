/**
 * Filter:
 *   ID: 5
 *   name: autoparkfunktion (german: Hersteller)
 *   description: filter autoparkfunktion by name
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
    return { modellnameId: id };
  }
  
  
  module.exports = {
    buildWhereClause: buildWhereClause
  };
  