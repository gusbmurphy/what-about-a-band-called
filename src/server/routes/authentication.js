import md5 from "md5";

import { User } from "../models";

// TODO: What are authentication tokens? Why should we use them?

export const authenticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    let { username, password } = req.body;
    User.findOne({ name: username }).exec((err, user) => {
        if (err) {
          console.info("Error in authentication route:\n", err)
          return res.status(500).send();
        }
        if (!user) {
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