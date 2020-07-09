import md5 from "md5";

import { User } from "../models";
import { UserCreationStatuses } from "../../app/store/action-types";

// TODO: Currently, the React component checks to see if the user has correctly entered their passwords, which displays as an error before the username has been taken, let's make it so they know that the username is taken before the password business

export async function postCreateUser(req, res) {
  let { username, password } = req.body;
  if (await User.exists({ name: username })) {
    return res
      .status(401)
      .send({ reason: UserCreationStatuses.USERNAME_TAKEN });
  } else {
    let newUser = new User({
      name: username,
      passwordHash: md5(password),
    });
    newUser.save((err) => {
      if (err) {
        console.info("Error in user creation route:\n", err);
        return res
          .status(500)
          .send({ reason: UserCreationStatuses.SERVER_ERROR });
      }
      return res.status(200).send();
    });
  }
}
