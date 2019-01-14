/**
 * All filter definitions.
 * This array represents all filter.
 */
const filter = {
// FId   filename/path based on the this (filter) directroy
  '1'  : 'abs',                 // ABS
  '2'  : 'automatic_parking',   // Autoparkfunktion
  '3'  : 'battery_type',        // Batterieart
  '4'  : 'battery_capacity',    // Batteriekapazitaet
  '5'  : 'codriver_airbag',     // Beifahrerairbag
  '6'  : 'acceleration',        // Beschleunigung
  '7'  : 'bluetooth',           // Bluetooth
  '8'  : 'board_computer',      // Bordcomputer
  '9'  : 'pub_year',            // Erscheinungsjahr
  '10' : 'color',               // Farbe
  '11' : 'window_lifter',       // Fensterheber
  '12' : 'weight_complete',     // Gesamtgewicht
  '13' : 'manufacturer',        // Hersteller
  '14' : 'topSpeed',            // Hoechstgeschwindigkeit
  '15' : 'price',               // Kaufpreis
  '16' : 'airCon',              // Klimaanlage
  '17' : 'storage',             // Laderaum
  '18' : 'leasing',             // Leasingpreis
  '19' : 'weight_empty',        // Leergewicht
  '20' : 'capacity',            // Leistung
  '21' : 'max_torque',          // MaxDrehmoment
  '22' : 'modelname',           // Modellname
  '23' : 'nav',                 // Navi
  '24' : 'parkinghelp',         // Parkhilfe
  '25' : 'reach',               // Reichweite
  '26' : 'tirepressure_sensor', // Reifendrucksensor
  '27' : 'recuperation',        // Rekuperation
  '28' : 'seats',               // Sitze
  '29' : 'seat_radiator',       // Sitzheizung
  '30' : 'seat_material',       // Sitzmaterial
  '31' : 'lane_assistant',      // Spurhalter
  '32' : 'plug',                // Stecker
  '33' : 'cruisecontrol',       // Tempomat
  '34' : 'type',                // Typ
  '35' : 'consumption',         // Verbrauch
  '36' : 'paneling_material',   // Verkleidungsmaterial
  '99' : 'id'                   // Elektroauto ID
};


module.exports = { };
for (let id in filter) {
  //console.log ("ID: " + id + " Path: " + filter[id] + '.js');
  module.exports[id] = require('./' + filter[id]);
}
