const models = [
  require('./AltWord'),
  require('./AltWordEntry'),
  require('./AltWordGroup'),
  require('./AltWordGroupEntry'),
  require('./Country'),
  require('./CountryName'),
  require('./Flag'),
  require('./FlagEntry'),
  require('./FlagLevel'),
  require('./FlagLevelEntry'),
  require('./FlagType'),
  require('./FlagTypeEntry'),
  require('./Language'),
  require('./LanguageName'),
  require('./Localization'),
  require('./Reading'),
  require('./ReadingEntry'),
  require('./SpeechPart'),
  require('./SpeechPartEntry'),
  require('./Status'),
  require('./StatusEntry'),
  require('./SubTerm'),
  require('./SubTermEntry'),
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
      AltWordEntry,
      AltWordGroup,
      AltWordGroupEntry,
      Country,
      CountryName,
      Flag,
      FlagEntry,
      FlagType,
      FlagTypeEntry,
      FlagLevel,
      FlagLevelEntry,
      Language,
      LanguageName,
      Localization,
      Reading,
      ReadingEntry,
      SpeechPart,
      SpeechPartEntry,
      Status,
      StatusEntry,
      SubTerm,
      SubTermEntry,
      Word,
      WordEntry
    } = database.models;

    AltWord.belongsTo(AltWordGroup);
    AltWord.belongsToMany(WordEntry, { through: 'WordEntries_have_AltWords' });

    AltWordEntry.belongsTo(AltWord);
    AltWordEntry.belongsTo(Localization);

    AltWordGroupEntry.belongsTo(AltWordGroup);
    AltWordGroupEntry.belongsTo(Localization);

    CountryName.belongsTo(Country);
    CountryName.belongsTo(Language);

    Flag.belongsTo(FlagLevel);
    Flag.belongsTo(FlagType);
    Flag.belongsToMany(WordEntry, { through: 'WordEntries_have_Flags' });

    FlagEntry.belongsTo(Flag);
    FlagEntry.belongsTo(Localization);

    FlagTypeEntry.belongsTo(FlagType);
    FlagTypeEntry.belongsTo(Localization);

    FlagLevelEntry.belongsTo(FlagLevel);
    FlagLevelEntry.belongsTo(Localization);

    LanguageName.belongsTo(Language);

    Localization.belongsTo(Country);
    Localization.belongsTo(Language);

    Reading.belongsToMany(WordEntry, { through: 'WordEntries_have_Readings' });

    ReadingEntry.belongsTo(Reading);
    ReadingEntry.belongsTo(Localization);

    SpeechPart.belongsToMany(WordEntry, {
      through: 'WordEntries_have_SpeechParts'
    });

    SpeechPartEntry.belongsTo(Status);
    SpeechPartEntry.belongsTo(Localization);

    StatusEntry.belongsTo(Status);
    StatusEntry.belongsTo(Localization);

    SubTerm.belongsToMany(WordEntry, { through: 'WordEntries_have_SubTerms' });

    SubTermEntry.belongsTo(SubTerm);
    SubTermEntry.belongsTo(Localization);

    WordEntry.belongsTo(Localization);
    WordEntry.belongsTo(Status);
    WordEntry.belongsTo(Word);
  }
}

module.exports = Models;
