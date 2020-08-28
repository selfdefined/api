const { DataTypes } = require("sequelize");

const Level = (sequelize) =>
  sequelize.define("Level", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Level;
