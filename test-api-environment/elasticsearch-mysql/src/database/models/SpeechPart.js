const { DataTypes } = require('sequelize');
const SequelizeSlugify = require('sequelize-slugify');

const SpeechPart = (database) => {
  const model = database.define('SpeechPart', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abbrev: {
      type: DataTypes.STRING
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

module.exports = SpeechPart;
