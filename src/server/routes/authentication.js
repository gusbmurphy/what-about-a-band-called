import { v1 as uuid } from "uuid";
import md5 from "md5";
import { connectDB } from "../connect-db";

const authenticationTokens = [];

// async function assembleUserState(user) {
//     var db = await connectDB();
// }

export const authenticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    let { username, password } = req.body;
    let db = await connectDB();
    let collection = db.collection("users");

    let user = await collection.findOne({ name: username });
    if (!user) {
      return res.status(500).send("Username not found.");
    }

    let hash = md5(password);
    let passwordCorrect = hash === user.passHash;

    if (!passwordCorrect) {
      return res.status(500).send("Incorrect password.");
    }

    // TODO: What is the token for?
    let token = uuid();
    authenticationTokens.push({
      token,
      userID: user.id,
    });

    let state = {};
    res.send({
      token,
      userID: user.id,
      state
    });
  });
};
