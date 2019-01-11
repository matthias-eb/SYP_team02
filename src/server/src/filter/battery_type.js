/**
 * Filter:
 *   ID: 3
 *   name: battery_type (german: Batterieart)
 *   description: filter battery type
 *   data-example: { data: '<battery-type>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter battery type.
 *
 * @param batteryType type of battery
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(batteryType) {
  return { battery_type: batteryType };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
