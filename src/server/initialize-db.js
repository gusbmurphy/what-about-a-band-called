import { defaultState } from "./default-state";
import { getConnection } from "./connect-db";

async function initializeDB() {
  let db = await getConnection();

  // Check to see if we have loaded the default data in, and if not do so
  let user = await db.collection("users").findOne({ id: "U1" });
  if (!user) {
    for (let collectionName in defaultState) {
      let collection = db.collection(collectionName);
      await collection.insertMany(defaultState[collectionName]);
    }
  }
}

initializeDB();