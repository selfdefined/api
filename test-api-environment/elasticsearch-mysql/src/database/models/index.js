const models = [
  require("./AltWord"),
  require("./Flag"),
  require("./FlagType"),
  require("./Level"),
  require("./Reading"),
  require("./Speech"),
  require("./SubTerm"),
  require("./Word"),
];

module.exports.init = (sequelize) => {
  for (let m = 0; m < models.length; m++) {
    models[m](sequelize);
  }
};

module.exports.initRelationships = (sequelize) => {
  const { AltWord, Flag, FlagType, Level, Reading, Speech, SubTerm, Word } = sequelize.models;
  AltWord.hasOne(Speech);

  Flag.hasOne(Level);
  Flag.hasOne(FlagType);

  Word.hasMany(Speech);
  Word.hasMany(SubTerm);
  Word.hasMany(Reading);
  Word.hasMany(Flag);
  Word.hasMany(AltWord);
};
