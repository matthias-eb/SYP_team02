const Sequelize = require('sequelize');
const db = require('../database/database');
const workshop = require('./workshop');

manufacturer = db.sequelize.define('manufacturer', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'HId'
  },
  name: {
    type: Sequelize.STRING,
    field: 'Name',
    validate: {
      min: 3,
      max: 255
    },
    allowNull: false
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
  tableName: 'Hersteller'
});

manufacturer.hasMany(workshop, {
  foreignKey: 'Hersteller_HId',
  sourceKey: 'HId'
});
module.exports = manufacturer;
