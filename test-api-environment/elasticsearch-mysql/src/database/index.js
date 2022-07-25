const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

const Models = require('./models');

dotenv.config();

const {
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_PORT
} = process.env;

const database = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: 'mysql'
});

const models = new Models(database);

module.exports = database;
