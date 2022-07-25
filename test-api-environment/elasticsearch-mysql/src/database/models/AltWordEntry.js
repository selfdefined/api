const { DataTypes } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const AltWordEntry = (database) => {
  const model = database.define('AltWordEntry', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
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

module.exports = AltWordEntry;
