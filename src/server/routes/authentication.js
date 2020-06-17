import { v1 as uuid } from "uuid";
import md5 from "md5";
// import { getConnection } from "../connect-db";
import { User } from "../models";

// const authenticationTokens = [];

export const authenticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    let { username, password } = req.body;
    User.findOne({ name: username }).exec((err, user) => {
        if (err) {
          console.info("Error in authentication route:\n", err)
          return res.status(500).send();
        }
        if (user.passwordHash === md5(password)) {
          return res.status(200).send({ userId: user._id });
        } else {
          // TODO: Should we be telling the client that the password was wrong explicitly here?
          return res.status(500).send();
        }
      });
  });
};

// export const authenticationRoute = (app) => {
//   app.post("/authenticate", async (req, res) => {
//     let { username, password } = req.body;
//     let db = await getConnection();
//     let collection = db.collection("users");

//     let user = await collection.findOne({ name: username });
//     if (!user) {
//       return res.status(500).send("Username not found.");
//     }

//     let hash = md5(password);
//     let passwordCorrect = hash === user.passHash;

//     if (!passwordCorrect) {
//       return res.status(500).send("Incorrect password.");
//     }

//     // TODO: What is the token for?
//     let token = uuid();
//     authenticationTokens.push({
//       token,
//       userId: user.id,
//     });

//     let state = {};
//     res.send({
//       token,
//       userId: user.id,
//       state
//     });
//   });
// };
