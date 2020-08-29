const models = [
  require('./AltWord'),
  require('./AltWordGroup'),
  require('./Flag'),
  require('./FlagType'),
  require('./FlagLevel'),
  require('./Reading'),
  require('./SpeechPart'),
  require('./SubTerm'),
  require('./Word')
];

class Models {
  constructor(database) {
    this.init = this.init.bind(this);
    this.initModels = this.initModels.bind(this);
    this.initRelationships = this.initRelationships.bind(this);

    this.init(database);
  }
  init(database) {
    this.initModels(database);
    this.initRelationships(database);
  }
  initModels(database) {
    for (let m = 0; m < models.length; m++) {
      models[m](database);
    }
  }
  initRelationships(database) {
    const {
      AltWord,
      AltWordGroup,
      Flag,
      FlagType,
      FlagLevel,
      Reading,
      SpeechPart,
      SubTerm,
      Word
    } = database.models;

    AltWord.belongsTo(AltWordGroup);
    Flag.belongsTo(FlagLevel);
    Flag.belongsTo(FlagType);

    AltWord.belongsToMany(Word, { through: 'Words_have_AltWords' });
    Flag.belongsToMany(Word, { through: 'Words_have_Flags' });
    Reading.belongsToMany(Word, { through: 'Words_have_Readings' });
    SpeechPart.belongsToMany(Word, { through: 'Words_have_SpeechParts' });
    SubTerm.belongsToMany(Word, { through: 'Words_have_SubTerms' });
  }
}

module.exports = Models;
