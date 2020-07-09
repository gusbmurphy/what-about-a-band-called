import md5 from "md5";
import { AuthenticationStatuses } from "../../app/store/actions/types";
import { User } from "../models";

// TODO: What are authentication tokens? Why should we use them?

export async function postUserAuthenticate(req, res) {
  let { username, password } = req.body;
  if (!(await User.exists({ name: username }))) {
    console.log("no user");
    return res.status(401).send({ reason: AuthenticationStatuses.INVALID_USERNAME })
  } else {
    User.findOne({ name: username }).exec((err, user) => {
      if (err) {
        console.info("Error in authentication route:\n", err);
        return res.status(500).send();
      }
      if (user.passwordHash === md5(password)) {
        return res.status(200).send({
          userId: user._id,
          username: user.name,
          bandsModified: user.bandsModified,
        });
      } else {
        return res
          .status(401)
          .send({ reason: AuthenticationStatuses.INVALID_PASSWORD });
      }
    });
  }
}
