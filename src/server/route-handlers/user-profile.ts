import { User } from "../models/user-model";
import { Band } from "../models/band-model";
import { UserProfileType } from "../../app/store/slices/user-profile-slice";
import { Types as MongooseTypes } from "mongoose";

export async function getUserProfile(req, res) {
  const { userId } = req.params;
  console.log("userId in profile route: ", userId);
  console.log("type of userId in profile route: ", typeof(userId));
  User.findById(new MongooseTypes.ObjectId(userId), async (err, user) => {
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
