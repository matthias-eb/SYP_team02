const Sequelize = require('sequelize');
const config = require('../../config.json');

const db = {};
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: 'mysql',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
