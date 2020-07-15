import md5 from "md5";
import { UserCreationStatuses } from "../../app/store/statuses";
import { User } from "../models";

export async function postCreateUser(req, res) {
  let { username, password, email } = req.body;
  if (await User.exists({ name: username })) {
    return res
      .status(409)
      .send({ reason: UserCreationStatuses.USERNAME_TAKEN });
  }
  if (await User.exists({ email })) {
    return res.status(409).send({ reason: UserCreationStatuses.EMAIL_TAKEN });
  }

  let newUser = new User({
    name: username,
    email,
    passwordHash: md5(password),
  });
  newUser.save((err) => {
    if (err) {
      console.info("Error in user creation route:\n", err);
      return res
        .status(500)
        .send({ reason: UserCreationStatuses.SERVER_ERROR });
    }
    // TODO: Why can't I set this status to 201 or something else? Driving me insane.
    return res.status(200).send();
  });
}
