const { DataTypes } = require('sequelize');

const Level = (database) =>
  database.define('Level', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = Level;
