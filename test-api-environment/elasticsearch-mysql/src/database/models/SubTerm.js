const { DataTypes } = require('sequelize');

const SubTerm = (database) =>
  database.define('SubTerm', {
    affix: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = SubTerm;
