const models = [
  require('./AltWord'),
  require('./Flag'),
  require('./FlagType'),
  require('./Level'),
  require('./Reading'),
  require('./Speech'),
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
      Flag,
      FlagType,
      Level,
      Reading,
      Speech,
      SubTerm,
      Word
    } = database.models;
    AltWord.hasOne(Speech);

    Flag.hasOne(Level);
    Flag.hasOne(FlagType);

    Speech.belongsToMany(Word, { through: 'Word_Speech' });
    SubTerm.belongsToMany(Word, { through: 'Word_SubTerm' });
    Reading.belongsToMany(Word, { through: 'Word_Reading' });
    Flag.belongsToMany(Word, { through: 'Word_Flag' });
    AltWord.belongsToMany(Word, { through: 'Word_AltWord' });
  }
}

module.exports = Models;
