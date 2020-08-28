const { DataTypes } = require("sequelize");

const AltWord = (sequelize) =>
  sequelize.define("AltWord", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = AltWord;
