const { DataTypes } = require("sequelize");

const SubTerm = (sequelize) =>
  sequelize.define("SubTerm", {
    affix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = SubTerm;
