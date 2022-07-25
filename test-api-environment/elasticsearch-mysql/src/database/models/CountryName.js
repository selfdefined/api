const { DataTypes } = require('sequelize');

const CountryName = (database) => {
  database.define('CountryName', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

module.exports = CountryName;
