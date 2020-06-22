import { Band, BandModification } from "../models";

export const bandRoutes = (app) => {
  app.get("/bands/get", async (req, res) => {
    Band.find({}).exec((err, bands) => {
      if (err) {
        console.info('Error in "/bands/get" route:\n', err);
        return res.status(500).send();
      }
      return res.status(200).send(bands);
    });
  });

  app.post("/band/new", async (req, res) => {
    let { bandName, creatingUserId } = req.body;
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
      return res.status(200).send(newBand._id);
    });
  });

  app.post("/band/modify", async (req, res) => {
    let { targetBandId, modifyingUserId, modificationValue } = req.body;
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
  });
};
