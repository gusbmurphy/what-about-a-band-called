import md5 from "md5";
import { AuthenticationStatuses } from "../../app/store/statuses";
import { User } from "../models";

// TODO: What are authentication tokens? Why should we use them?

export async function postUserAuthenticate(req, res) {
  const { username, password } = req.body;
  if ((await User.exists({ name: username })) == false) {
    return res
      .status(401)
      .send({ reason: AuthenticationStatuses.USERNAME_NOT_FOUND });
  }
  User.findOne({ name: username }).exec((err, user) => {
    if (err) {
      console.info("Error in authentication route:\n", err);
      return res.status(500).send();
    } else if (user) {
      if (user.passwordHash === md5(password)) {
        req.session.userId = user._id;
        console.log(req.session);
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
    }
  });
}
