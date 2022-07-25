const { DataTypes } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const AltWordGroupEntry = (database) => {
  const model = database.define('AltWordGroupEntry', {
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

module.exports = AltWordGroupEntry;
