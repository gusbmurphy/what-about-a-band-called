import { User } from "../models/user-model";

export async function checkUserSession(req, res) {
  const { session } = req;
  console.log("req.session.id: ", session.id)
  console.log("req.session: ", session);
  const { userId } = session;
  console.log("req.session.userId: ", userId)
  if (!userId) return res.status(403).send();

  const userDoc = await User.findById(userId);
  if (userDoc) {
    const user = {
      userId,
      username: userDoc?.name,
      bandsModified: userDoc?.bandsModified,
    };
    return res.status(200).send(user);
  } else {
    return res.status(404).send();
  }
}
