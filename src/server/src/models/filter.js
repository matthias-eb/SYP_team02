const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define('filter', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'FId'
  },
  visibility: {
    type: Sequelize.TINYINT,
    field: 'Sichtbar',
    is: [ 1, 0 ]
  },
  name: {
    type: Sequelize.STRING,
    field: 'Name',
    validate: {
      max: 255
    }
  },
  type: {
    type: Sequelize.INTEGER,
    field: 'Typ'
  },
  data: {
    type: Sequelize.JSON,
    field: 'Daten'
  },
  weight: {
    type: Sequelize.INTEGER,
    field: 'Gewichtung'
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
  tableName: 'Filter'
});
