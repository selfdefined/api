const { DataTypes } = require('sequelize');

const Speech = (database) =>
  database.define('Speech', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abbrev: {
      type: DataTypes.STRING
    }
  });

module.exports = Speech;
