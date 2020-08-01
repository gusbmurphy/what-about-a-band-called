import { User } from "../models/user-model";
import { Band } from "../models/band-model";
import { UserProfileType } from "../../app/store/slices/user-profile-slice";

export async function getUserProfile(req, res) {
  const { userId } = req.params;
  User.findById(userId, async (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).send();
    } else if (user) {
      const profile: UserProfileType = {
        id: user._id,
        name: user.name,
        totalScore: await user.getTotalScore(),
        averageScore: await user.getAverageScore(),
        bands: await Band.find({ ownerId: user._id }),
        namesContributed: await user.getNumOfNamesContributed(),
      };
      return res.status(200).send({ profile });
    }
    return res.status(404).send();
  });
}
