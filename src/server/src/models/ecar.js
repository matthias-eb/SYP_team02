const Sequelize = require('sequelize');
const db = require('../database/database');

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
  ps: {
    type: Sequelize.INTEGER,
    field: 'PS'
  },
  price: {
    type: Sequelize.DOUBLE,
    field: 'Kaufpreis'
  },
  leasing: {
    type: Sequelize.DOUBLE,
    field: 'Leasingpreis'
  },
  topSpeed: {
    type: Sequelize.INTEGER,
    field: 'Hoechstgeschwindigkeit'
  },
  batteryCapacity: {
    type: Sequelize.DOUBLE,
    field: 'Batteriekapazitaet'
  },
  consumption: {
    type: Sequelize.DOUBLE,
    field: 'Verbrauch'
  },
  image: {
    type: Sequelize.STRING,
    field: 'Bild'
    
  },
  seats: {
    type: Sequelize.INTEGER,
    field: 'Sitze',
    validate: {
      min: 1
    }
  },
  color: {
    type: Sequelize.STRING,
    field: 'Farbe'
  },
  servoSteering: {
    type: Sequelize.TINYINT,
    field: 'Lenkhilfe',
    is:[ 1, 0 ]
  },
  airCon: {
    type: Sequelize.TINYINT,
    field: 'Klimaanlage',
    is:[ 1, 0 ]
  },
  parkinghelp: {
    type: Sequelize.TINYINT,
    field: 'Parkhilfe',
    is:[ 1, 0 ]
  },
  cruisecontrol: {
    type: Sequelize.TINYINT,
    field: 'Tempomat',
    is:[ 1, 0 ]
  },
  tpsensor: {
    type: Sequelize.TINYINT,
    field: 'Reifendrucksensor',
    is:[ 1, 0 ]
  },
  /*
  ps: {
    type: Sequelize.INTEGER,
    field: 'PS'
  },
*/











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
  tableName: 'Elektroauto'
});

module.exports = ecar;
