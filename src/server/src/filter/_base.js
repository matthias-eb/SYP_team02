/**
 * All filter definitions.
 * This array represents all filter.
 */
const filter = {
// FId   filename/path based on the this (filter) directroy
  '1' : 'manufacturer',         // Hersteller
  '2' : 'publishingYear',       // Erscheinungsjahr
  '3' : 'price'                 // Preis
};


module.exports = { };
for (let id in filter) {
  //console.log ("ID: " + id + " Path: " + filter[id] + '.js');
  module.exports[id] = require('./' + filter[id]);
}
