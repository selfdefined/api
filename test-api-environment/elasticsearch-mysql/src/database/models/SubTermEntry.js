const { DataTypes } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const SubTermEntry = (database) => {
  const model = database.define('SubTermEntry', {
    affix: {
      type: DataTypes.STRING,
      allowNull: false
    },
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

module.exports = SubTermEntry;
