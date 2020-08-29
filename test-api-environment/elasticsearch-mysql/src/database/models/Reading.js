const { DataTypes } = require('sequelize');

const Reading = (database) =>
  database.define('Reading', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    href: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = Reading;
