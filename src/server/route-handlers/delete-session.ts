import { sessionName } from "../config"

export async function deleteUserSession(req, res) {
  const { session } = req;
  console.log("session in deleteUserSession route: ", session);
  const { userId } = session;
  if (userId) {
    try {
      session.destroy((err) => {
        if (err) throw err;
        return res.clearCookie(sessionName).send();
      });
    } catch (err) {
      return res.status(422).send();
    }
  }
}
