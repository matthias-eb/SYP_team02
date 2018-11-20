const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'BId'
  },
  name: {
    type: Sequelize.STRING,
    field: 'Benutzername',
    validate: {
      min: 3,
      max: 50
    },
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    field: 'Email',
    validate: {
      min: 6,
      max: 255
    },
    allowNull: false
  },
  pwd: { /* hash: sha256 */
    type: Sequelize.STRING,
    field: 'Passwort',
    validate: {
      min: 64,
      max: 64
    },
    allowNull: false
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
  tableName: 'Benutzer'
});
