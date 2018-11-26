const Sequelize = require('sequelize');
const db = require('../database/database');

let workshop = db.sequelize.define('workshop', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'WId'
  },
  name: {
    type: Sequelize.STRING,
    field: 'Name',
    validate: {
      max: 255
    }
  },
  latitude: {
    type: Sequelize.DOUBLE,
    field: 'Breitengrad'
  },
  longitude: {
    type: Sequelize.DOUBLE,
    field: 'Laengengrad'
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
  tableName: 'Werkstaetten'
});

module.exports = workshop;
