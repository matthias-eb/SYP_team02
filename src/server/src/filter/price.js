/**
 * Filter:
 *   ID: 3
 *   name: price (german: Preis)
 *   description: filter price between x and y
 *   data-example: { data: { min: <min>, max: <max> } }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the ecars between a specific price range
 *
 * @param price min and max price which should fit each car
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(price) {
  return { price: { between: [ price.min, price.max ] } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
