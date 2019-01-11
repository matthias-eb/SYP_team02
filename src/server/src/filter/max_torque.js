/**
 * Filter:
 *   ID: 21
 *   name: max_torque (german: MaxDrehmoment)
 *   description: filter torque by maximal value
 *   data-example: { data: '<torque>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the maximal torque value.
 *
 * @param maxTorque maximal torque value
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(maxTorque) {
  return { max_torque: { lte: maxTorque } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
