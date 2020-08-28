const { DataTypes } = require("sequelize");

const FlagType = (sequelize) =>
  sequelize.define("FlagType", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = FlagType;
