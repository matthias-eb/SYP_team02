/**
 * Filter:
 *   ID: 26
 *   name: tirepressure_sensor (german: Reifendrucksensor)
 *   description: filter ecars with/without tirepressure sensor.
 *   data-example: { data: '<tirepressure-sensor>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without tirepressure sensor
 *
 * @param tirepressureSensor 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(tirepressureSensor) {
  return { tirepressure_sensor: tirepressureSensor };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
