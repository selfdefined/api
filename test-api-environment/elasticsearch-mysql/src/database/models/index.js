const models = [
  require('./AltWord'),
  require('./AltWordGroup'),
  require('./Flag'),
  require('./FlagType'),
  require('./FlagLevel'),
  require('./Language'),
  require('./Reading'),
  require('./SpeechPart'),
  require('./Status'),
  require('./SubTerm'),
  require('./Word'),
  require('./WordEntry')
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
      Language,
      Reading,
      SpeechPart,
      Status,
      SubTerm,
      Word,
      WordEntry
    } = database.models;

    AltWord.belongsTo(AltWordGroup);
    Flag.belongsTo(FlagLevel);
    Flag.belongsTo(FlagType);

    WordEntry.hasOne(Language);
    WordEntry.hasOne(Status);

    AltWord.belongsToMany(WordEntry, { through: 'WordEntries_have_AltWords' });
    Flag.belongsToMany(WordEntry, { through: 'WordEntries_have_Flags' });
    Reading.belongsToMany(WordEntry, { through: 'WordEntries_have_Readings' });
    SpeechPart.belongsToMany(WordEntry, {
      through: 'WordEntries_have_SpeechParts'
    });
    SubTerm.belongsToMany(WordEntry, { through: 'WordEntries_have_SubTerms' });
    WordEntry.belongsToMany(Word, { through: 'Words_have_WordEntries' });
  }
}

module.exports = Models;
