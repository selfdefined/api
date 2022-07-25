const database = require('../database');

async function syncDatabase() {
  try {
    const authResponse = await database.authenticate();
    console.log('Database authentication successful.');
    console.log(authResponse);
    try {
      const syncResponse = await database.sync({ force: true });
      console.log('Database sync successful.');
      console.log(syncResponse);
      database.close();
    } catch (syncError) {
      console.log('Unable to sync.');
      throw new Error(syncError);
    }
  } catch (authenticateError) {
    console.log('Unable to authenticate.');
    throw new Error(authenticateError);
  }
}

syncDatabase();
