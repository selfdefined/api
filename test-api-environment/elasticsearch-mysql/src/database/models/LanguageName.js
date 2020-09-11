const { DataTypes } = require('sequelize');

const LanguageName = (database) => {
  database.define('LanguageName', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

module.exports = LanguageName;
