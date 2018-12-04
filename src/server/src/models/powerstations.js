const Sequelize = require('sequelize');
const db = require('../database/database');

let powerstations = db.sequelize.define('powerstations', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'LId'
  },
  operator: {
    type: Sequelize.STRING,
    field: 'Betreiber',
    validate: {
      max: 255
    }
  },
  network: {
    type: Sequelize.STRING,
    field: 'Netzwerk',
    validate: {
      max: 255
    }
  },
  descr: {
    type: Sequelize.STRING,
    field: 'Beschreibung',
    validate: {
      max: 500
    }
  },
  city: {
    type: Sequelize.STRING,
    field: 'Stadt',
    validate: {
      max: 255
    }
  },
  street: {
    type: Sequelize.STRING,
    field: 'Strasse',
    validate: {
      max: 500
    }
  },
  postal_code: {
    type: Sequelize.INTEGER,
    field: "Postleitzahl",
    validate: {
      min: 5,
      max: 5
    }
  },
  plug: {
    type: Sequelize.INTEGER,
    field: 'Stecker',
    validate: {
      max:45
    }
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
  paranoid: false,

  // if true:
  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  underscored: false,

  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true,

  // define the table's name
  tableName: 'Ladestationen'
});

module.exports = powerstations;
