import { Band, BandModification } from "../models";
import { BandCreationStatuses } from "../../app/store/action-types";

export async function getBands(req, res) {
  Band.find({}).exec((err, bands) => {
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
    return res.status(500).send();
  }

  // Check to see if the user has already modified this band
  if (
    await BandModification.exists({
      ownerId: modifyingUserId,
      bandId: targetBandId,
    })
  ) {
    // TODO: Should we send a message saying that the user has already modified the band?
    return res.status(500).send();
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
          return res.status(200).send();
        });
      }
    );
  }
}