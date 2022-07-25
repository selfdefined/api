const { DataTypes } = require('sequelize');

const Language = (database) => {
  database.define('Language', {
    iso: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

module.exports = Language;
