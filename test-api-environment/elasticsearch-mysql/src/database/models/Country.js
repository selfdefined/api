const { DataTypes } = require('sequelize');

const Country = (database) => {
  database.define('Country', {
    iso: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

module.exports = Country;
