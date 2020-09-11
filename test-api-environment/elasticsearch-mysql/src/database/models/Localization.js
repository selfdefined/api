const { DataTypes } = require('sequelize');

const Localization = (database) => {
  database.define('Localization', {
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

module.exports = Localization;
