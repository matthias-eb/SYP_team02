/**
 * Filter:
 *   ID: 36
 *   name: paneling_material (german: Verkleidungsmaterial)
 *   description: filter paneling material
 *   data-example: { data: '<paneling-material>' }
 */


/**
 * Build specific WHERE-clause object
 * to filter paneling material.
 *
 * @param panelingMaterial material of paneling
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(panelingMaterial) {
  return { paneling_material: panelingMaterial };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
