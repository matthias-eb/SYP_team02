/**
 * Filter:
 *   ID: 4
 *   name: modelname (german: Modellname)
 *   description: filter modelname by name
 *   data-example: { data: '<modelname>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the modelname.
 *
 * @param modelname name of the model
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(modelname) {
  return { modelname: modelname };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
