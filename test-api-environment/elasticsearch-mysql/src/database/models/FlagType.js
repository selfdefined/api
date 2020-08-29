const { DataTypes } = require('sequelize');

const FlagType = (database) =>
  database.define('FlagType', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = FlagType;
