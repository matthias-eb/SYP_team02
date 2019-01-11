/**
 * Filter:
 *   ID: 31
 *   name: lane_assistant (german: Spurhalter)
 *   description: filter ecars with/without lane assistant.
 *   data-example: { data: '<lane-assistant>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter ecar with/without lane assistant
 *
 * @param laneAssistant 0 if false; otherwise 1 for true
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(laneAssistant) {
  return { lane_assistant: laneAssistant };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
