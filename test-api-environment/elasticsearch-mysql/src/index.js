const sequelize = require("./database/sequelize");

async function syncDatabaseChanges() {
  try {
    const syncResponse = await sequelize.authenticate();
    console.log("Database authentication successful.");

    try {
      const syncResponse = await sequelize.sync({ force: true });
      console.log("Database sync successful.");
      sequelize.close();
    } catch (syncError) {
      console.log("Unable to sync.");
      throw new Error(syncError);
    }
  } catch (authenticateError) {
    console.log("Unable to authenticate.");
    throw new Error(authenticateError);
  }
}

syncDatabaseChanges();
