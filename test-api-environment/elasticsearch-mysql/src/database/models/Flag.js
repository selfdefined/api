const { DataTypes } = require("sequelize");

const Flag = (sequelize) =>
  sequelize.define("Flag", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Flag;
