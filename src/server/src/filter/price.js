/**
 * Filter:
 *   ID: 15
 *   name: price (german: Kaufpreis)
 *   description: filter max price
 *   data-example: { data: <max> }
 */


/**
 * Build specific WHERE-clause object
 * to filter for the ecars between a specific price range
 *
 * @param price max price which should fit each car
 *
 * @returns WHERE-clause object (Sequelize)
 */
function buildWhereClause(price) {
  return { price: { lte: price } };
}


module.exports = {
  buildWhereClause: buildWhereClause
};
