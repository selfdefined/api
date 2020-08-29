const { DataTypes } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const Word = (database) => {
  const model = database.define('Word', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    defined: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
  SequelizeSlugify.slugifyModel(model, {
    source: ['title'],
    slugOptions: { lower: true },
    overwrite: false,
    column: 'slug',
    incrementalReplacement: '-'
  });
};

module.exports = Word;
