// Setting up the database connection
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('school', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;