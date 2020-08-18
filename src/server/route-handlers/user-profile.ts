import { User } from "../models/user-model";
import { Band } from "../models/band-model";
import { UserProfileType } from "../../app/store/slices/user-profile-slice";
import { Types as MongooseTypes } from "mongoose";

export async function getUserProfile(req, res) {
  const { userId } = req.params;
  // console.debug("userId in profile route: ", userId);
  // console.debug("type of userId in profile route: ", typeof(userId));
  User.findById(new MongooseTypes.ObjectId(userId), async (err, user) => {
    // console.debug("reached .findById()")
    if (err) {
      // console.debug("reached err")
      // console.error(err);
      return res.status(500).send();
    } else if (user) {
      // console.debug("reached user, user: ", user)
      const profile: UserProfileType = {
        id: user._id,
        name: user.name,
        totalScore: await user.getTotalScore(),
        averageScore: await user.getAverageScore(),
        bands: await Band.find({ ownerId: user._id }),
        namesContributed: await user.getNumOfNamesContributed(),
      };
      // console.debug("profile to be sent: ", profile)
      return res.status(200).send({ profile });
    }
    // console.debug("outside of User.findById()")
    return res.status(404).send();
  });
}
