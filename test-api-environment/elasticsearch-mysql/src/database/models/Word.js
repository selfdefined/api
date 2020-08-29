const { DataTypes } = require('sequelize');

const Word = (database) =>
  database.define('Word', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

module.exports = Word;
