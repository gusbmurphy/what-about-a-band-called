import { Band, BandModification, User } from "../models";
import { BandCreationStatuses, BandSortTypes } from "../../app/store/statuses";
import { Types as MongooseTypes } from "mongoose";
import { userAuthenticationSaga } from "../../app/store/sagas";

export async function postBands(req, res) {
  const { maxBands, sortBy } = req.body;
  const query = Band.find({});

  switch (sortBy) {
    case BandSortTypes.BEST:
      query.sort({ score: -1 });
      break;
    case BandSortTypes.MOST_RECENT:
      query.sort({ createdOn: -1 });
      break;
    case BandSortTypes.WORST:
      query.sort({ score: 1 });
      break;
    default:
      break;
  }

  if (maxBands) query.limit(maxBands);

  query.exec((err, bands) => {
    if (err) {
      console.info('Error in "/bands/get" route:\n', err);
      return res.status(500).send();
    }
    return res.status(200).send(bands);
  });
}

export type NewBandRequestBody = {
  bandName: string;
  ownerId: MongooseTypes.ObjectId;
  ownerName: string;
};

export async function postNewBand(req, res) {
  const requestBody: NewBandRequestBody = req.body;
  if (await Band.exists({ name: requestBody.bandName })) {
    return res.status(500).send({ reason: BandCreationStatuses.BAND_EXISTS });
  }
  const newBand = new Band({
    name: requestBody.bandName,
    score: 0,
    ownerId: requestBody.ownerId,
    ownerName: requestBody.ownerName,
    createdOn: new Date(),
  });
  newBand.save((err) => {
    if (err) {
      console.info('Error in "/band/new" route:\n', err);
      return res.status(500).send();
    }
    // Add to the users "ownBands"
    User.findByIdAndUpdate(
      requestBody.ownerId,
      { $push: { ownBands: newBand._id } },
      (err) => {
        if (err) {
          console.info('Error in "/band/new" route:\n', err);
          return res.status(500).send();
        }
        return res.status(200).send({ newBand });
      }
    );
  });
}

export async function postModifyBand(req, res) {
  const { targetBandId, modifyingUserId, modificationValue } = req.body;

  // Check to make sure that the target band exists
  if (!(await Band.exists({ _id: targetBandId }))) {
    return res.status(404).send();
  }

  // Check to see if the user has already modified this band
  const existingMod = await BandModification.findOne({
    ownerId: modifyingUserId,
    bandId: targetBandId,
  });

  // TODO: Should we send a message saying that the user has already modified the band?
  if (existingMod) {
    // If this is a duplicate modification, respond with a code of 409
    if (existingMod.value == modificationValue) {
      return res.status(409).send();
    }

    // Otherwise, if the value is 0, we can delete this modification
    if (modificationValue == 0) {
      console.log("in the mod 0 realm");
      // Delete the modification
      BandModification.findByIdAndDelete(existingMod._id, (err) => {
        if (err) {
          console.info('Error in "/band/modify" route:\n', err);
          return res.status(500).send();
        }

        if (existingMod) {
          // Update the user's mods
          User.findByIdAndUpdate(
            modifyingUserId,
            {
              $pull: { bandsModified: { targetBandId: existingMod.bandId } },
            },
            (err) => {
              if (err) {
                console.info('Error in "/band/modify" route:\n', err);
                return res.status(500).send();
              }

              // Update the band's score
              Band.findByIdAndUpdate(
                targetBandId,
                {
                  $inc: { score: -existingMod.value },
                },
                (err) => {
                  if (err) {
                    console.info('Error in "/band/modify" route:\n', err);
                    return res.status(500).send();
                  }
                  return res.status(200).send();
                }
              );
            }
          );
        }
      });
    }
  } else {
    // Update the band
    Band.findOneAndUpdate(
      { _id: targetBandId },
      { $inc: { score: modificationValue } },
      (err) => {
        if (err) {
          console.info('Error in "/band/modify" route:\n', err);
          return res.status(500).send();
        }

        // Now create the new BandModification entry
        const modification = new BandModification({
          ownerId: modifyingUserId,
          bandId: targetBandId,
          value: modificationValue,
        });
        modification.save((err) => {
          if (err) {
            console.info('Error in "/band/modify" route:\n', err);
            return res.status(500).send();
          }

          // And finally update the modifying user's modified bands array
          User.findByIdAndUpdate(
            modifyingUserId,
            {
              $push: {
                bandsModified: {
                  targetBandId,
                  value: modificationValue,
                },
              },
            },
            (err) => {
              if (err) {
                console.info('Error in "/band/modify" route:\n', err);
                return res.status(500).send();
              }
              return res.status(200).send();
            }
          );
        });
      }
    );
  }
}
