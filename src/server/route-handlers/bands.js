import { Band, BandModification, User } from "../models";
import { BandCreationStatuses, BandSortTypes } from "../../app/store/statuses";

export async function postBands(req, res) {
  let { maxBands, sortBy } = req.body;
  let query = Band.find({});

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

export async function postNewBand(req, res) {
  let { bandName, creatingUserId } = req.body;
  if (await Band.exists({ name: bandName })) {
    return res.status(500).send({ reason: BandCreationStatuses.BAND_EXISTS });
  }
  let newBand = new Band({
    name: bandName,
    ownerId: creatingUserId,
    score: 0,
  });
  newBand.save((err) => {
    if (err) {
      console.info('Error in "/band/new" route:\n', err);
      return res.status(500).send();
    }
    return res.status(200).send({ newBandId: newBand._id });
  });
}

export async function postModifyBand(req, res) {
  let { targetBandId, modifyingUserId, modificationValue } = req.body;

  // Check to make sure that the target band exists
  if (!(await Band.exists({ _id: targetBandId }))) {
    return res.status(404).send();
  }

  // Check to see if the user has already modified this band
  let existingMod = await BandModification.findOne({
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
      BandModification.findByIdAndDelete(existingMod._id, (err) => {
        if (err) {
          console.info('Error in "/band/modify" route:\n', err);
          return res.status(500).send();
        }
        User.findByIdAndUpdate(
          modifyingUserId,
          {
            bandsModified: { $pull: { _id: existingMod._id } },
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
        let modification = new BandModification({
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
