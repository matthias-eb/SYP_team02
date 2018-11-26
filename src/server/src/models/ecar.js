const Sequelize = require('sequelize');
const db = require('./../database/database');

let ecar = db.sequelize.define('ecar', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'EId'
  },
  modelname: {
    type: Sequelize.STRING,
    field: 'Modellname',
    validate: {
      min: 3,
      max: 255
    }
  },
  type: {
    type: Sequelize.STRING,
    field: 'Typ',
    validate: {
      min: 3,
      max: 45
    }
  },
  image: {
    type: Sequelize.STRING,
    field: 'Bild',
    validate: {
      min: 5,
      max: 500
    }
  },
  capacity: {
    type: Sequelize.INTEGER,
    field: 'Leistung'
  },
  seats: {
    type: Sequelize.INTEGER,
    field: 'Sitze',
    validate: {
      min: 1
    }
  },
  weight_empty: {
    type: Sequelize.INTEGER,
    field: 'Leergewicht'
  },
  weight_complete: {
    type: Sequelize.INTEGER,
    field: 'Gesamtgewicht'
  },
  reach: {
    type: Sequelize.INTEGER,
    field: 'Reichweite'
  },
  max_torque: {
    type: Sequelize.INTEGER,
    field: 'MaxDrehmoment'
  },
  topSpeed: {
    type: Sequelize.INTEGER,
    field: 'Hoechstgeschwindigkeit'
  },
  stowage: {
    type: Sequelize.INTEGER,
    field: 'Laderaum'
  },
  price: {
    type: Sequelize.DOUBLE,
    field: 'Kaufpreis'
  },
  leasing: {
    type: Sequelize.DOUBLE,
    field: 'Leasingpreis'
  },
  acceleration: {
    type: Sequelize.DOUBLE,
    field: 'Beschleunigung'
  },
  battery_capacity: {
    type: Sequelize.DOUBLE,
    field: 'Batteriekapazitaet'
  },
  battery_weight: {
    type: Sequelize.DOUBLE,
    field: 'Batteriegewicht'
  },
  consumption: {
    type: Sequelize.DOUBLE,
    field: 'Verbrauch'
  },
  battery_type: {
    type: Sequelize.STRING,
    field: 'Batterieart',
    validate: {
      max: 255
    }
  },
  seat_material: {
    type: Sequelize.STRING,
    field: 'Sitzmaterial',
    validate: {
      max: 255
    }
  },
  color: {
    type: Sequelize.STRING,
    field: 'Farbe',
    validate: {
      max: 45
    }
  },
  paneling_material: {
    type: Sequelize.STRING,
    field: 'Verkleidungsmaterial',
    validate: {
      max: 255
    }
  },
  recuperation: {
    type: Sequelize.BOOLEAN,
    field: 'Rekuperation'
  },
  airCon: {
    type: Sequelize.BOOLEAN,
    field: 'Klimaanlage',
  },
  parkinghelp: {
    type: Sequelize.BOOLEAN,
    field: 'Parkhilfe',
  },
  cruisecontrol: {
    type: Sequelize.BOOLEAN,
    field: 'Tempomat',
  },
  tirepressure_sensor: {
    type: Sequelize.BOOLEAN,
    field: 'Reifendrucksensor',
  },
  automatic_parking: {
    type: Sequelize.BOOLEAN,
    field: 'Autoparkfunktion',
  },
  seat_radiator: {
    type: Sequelize.BOOLEAN,
    field: 'Sitzheizung',
  },
  abs: {
    type: Sequelize.BOOLEAN,
    field: 'ABS',
  },
  window_lifter: {
    type: Sequelize.BOOLEAN,
    field: 'Fensterheber',
  },
  lane_assistant: {
    type: Sequelize.BOOLEAN,
    field: 'Spurhalter',
  },
  bluetooth: {
    type: Sequelize.BOOLEAN,
    field: 'Bluetooth',
  },
  board_computer: {
    type: Sequelize.BOOLEAN,
    field: 'Bordcomputer',
  },
  nav: {
    type: Sequelize.BOOLEAN,
    field: 'Navi',
  },
  codriver_airbag: {
    type: Sequelize.BOOLEAN,
    field: 'Beifahrerairbag',
  },


  manufacturerId: {
    type: Sequelize.INTEGER,
    field: 'Hersteller_HId',
    references: 'Hersteller', // <<< Note, its table's name, not object name
    referencesKey: 'HId'      // <<< Note, its a column name
  }
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,

  // don't delete database entries but set the newly added attribute deletedAt
  // to the current date (when deletion was done). paranoid will only work if
  // timestamps are enabled
  paranoid: true,

  // if true:
  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  underscored: false,

  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,

  // define the table's name
  tableName: 'Elektroautos'
});

module.exports = ecar;
