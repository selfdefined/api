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

  Speech.belongsToMany(Word, { through: "Word_Speech" });
  SubTerm.belongsToMany(Word, { through: "Word_SubTerm" });
  Reading.belongsToMany(Word, { through: "Word_Reading" });
  Flag.belongsToMany(Word, { through: "Word_Flag" });
  AltWord.belongsToMany(Word, { through: "Word_AltWord" });
};
