const { DataTypes } = require("sequelize");

const Speech = (sequelize) =>
  sequelize.define("Speech", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abbrev: {
      type: DataTypes.STRING,
    },
  });

module.exports = Speech;
