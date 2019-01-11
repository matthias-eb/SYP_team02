/**
 * Filter:
 *   ID: 4
 *   name: battery_capacity (german: Batteriekapazitaet)
 *   description: filter ecar with min battery capacity.
 *   data-example: { data: '<battery-capacity>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with min battery capacity.
 *
 * @param batteryCapacity min battery capacity
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(batteryCapacity) {
  return { battery_capacity: { gte: batteryCapacity } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
