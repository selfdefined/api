const dotenv = require('dotenv');

dotenv.config();

const {
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_PORT
} = process.env;

module.exports = {
  development: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql'
  },
  test: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql'
  },
  production: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: 'mysql'
  }
};
