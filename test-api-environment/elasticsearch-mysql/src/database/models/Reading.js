const { DataTypes } = require("sequelize");

const Reading = (sequelize) =>
  sequelize.define("Reading", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    href: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Reading;
