/**
 * Filter:
 *   ID: 14
 *   name: topSpeed (german: Hoechstgeschwindigkeit)
 *   description: filter top speed by minimal value
 *   data-example: { data: '<speed>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the minimal top speed value.
 *
 * @param id topSpeed minimal top speed value
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(topSpeed) {
  return { topSpeed: { gte: topSpeed } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
