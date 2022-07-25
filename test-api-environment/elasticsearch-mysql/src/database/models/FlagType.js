const { DataTypes } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const FlagType = (database) => {
  const model = database.define('FlagType', {
    title: {
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

module.exports = FlagType;
