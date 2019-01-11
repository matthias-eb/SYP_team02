/**
 * Filter:
 *   ID: 5
 *   name: codriver_airbag (german: Beifahrerairbag)
 *   description: filter ecars with/without codriver airbag.
 *   data-example: { data: '<codriver-airbag>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without codriver-airbag
 *
 * @param codriverAirbag 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(codriverAirbag) {
  return { codriver_airbag: codriverAirbag };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
