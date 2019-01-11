/**
 * All filter definitions.
 * This array represents all filter.
 */
const filter = {
// FId   filename/path based on the this (filter) directroy
  '1' : 'manufacturer',         // Hersteller
  '2' : 'publishingYear',       // Erscheinungsjahr
  '3' : 'price',                // Preis
  '4' : 'modellname',           // Modellname
  '5' : 'automatic_parking',    // Autoparkfunktion
  '6' : 'capacity',             // Leistung
  '7' : 'topSpeed'              // Hoechstgeschwindigkeit
};


module.exports = { };
for (let id in filter) {
  //console.log ("ID: " + id + " Path: " + filter[id] + '.js');
  module.exports[id] = require('./' + filter[id]);
}
