const { DataTypes } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const ReadingEntry = (database) => {
  const model = database.define('ReadingEntry', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    href: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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

module.exports = ReadingEntry;
