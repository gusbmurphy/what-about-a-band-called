import { User } from "../models/user-model";

export async function checkUserSession(req, res) {
  const { session } = req;
  const { userId } = session;
  const userDoc = await User.findById(userId);
  if (userDoc) {
    const user = {
      userId,
      username: userDoc?.name,
      bandsModified: userDoc?.bandsModified,
    };
    return res.status(200).send(user);
  } else {
    return res.status(500).send();
  }
}
