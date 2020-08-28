const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

const models = require("./models");

dotenv.config();

const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT } = process.env;

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: "mysql",
});

models.init(sequelize);

models.initRelationships(sequelize);

module.exports = sequelize;
