const { DataTypes } = require('sequelize');

const AltWord = (database) =>
  database.define('AltWord', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = AltWord;
