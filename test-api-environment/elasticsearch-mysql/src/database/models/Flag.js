const { DataTypes } = require('sequelize');

const Flag = (database) =>
  database.define('Flag', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = Flag;
