// import { getConnection } from "../connect-db";
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

  // app.get("/bands/get", async (req, res) => {
  //   let db = await getConnection();
  //   let bands = db.collection("bands");
  //   if (!bands) return res.status(500);
  //   bands.find({}).toArray(function(err, result) {
  //     if (err) res.status(500);
  //     res.status(200).send(result);
  //   });
  //   // return res.status(200);
  // });

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
      return status(200).send(newBand._id);
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
  // async function addNewBand(band) {
  //   let db = await getConnection();
  //   let collection = db.collection("bands");
  //   await collection.insertOne(band);
  // };

  // app.post("/band/modify", async (req, res) => {
  //   let { targetBandId, modifyingUserId, modificationValue } = req.body;
  //   let db = await getConnection();

  //   let bands = db.collection("bands");
  //   let band = await bands.findOne({ id: targetBandId });
  //   if (!band) return res.status(500).send("Target band to modify not found.");

  //   // Check to see if this band has already been modified by the user
  //   let users = db.collection("users");
  //   let user = await users.findOne({ id: modifyingUserId });
  //   if (!user)
  //     return res.status(500).send("User attempting to modify not found.");

  //   let userHasModified = user.modifications.some(
  //     (modification) => modification.bandId === targetBandId
  //   );
  //   // console.log("userHasModified: " + userHasModified);
  //   if (userHasModified)
  //     return res.status(500).send("User has already modified target band.");

  //   // TODO: Allow for flags to be added
  //   // If we've reached this point, we can actually modify the band
  //   await bands.findOneAndUpdate(
  //     { id: targetBandId },
  //     {
  //       $inc: { score: modificationValue },
  //       $push: {
  //         modifications: {
  //           userID: modifyingUserId,
  //           value: modificationValue,
  //           isFlag: false,
  //         },
  //       },
  //     }
  //   );

  //   // Also add the modification to the user document
  //   let updatedBand = await users.findOneAndUpdate(
  //     { id: modifyingUserId },
  //     {
  //       $push: {
  //         modifications: {
  //           bandId: targetBandId,
  //           value: modificationValue,
  //           isFlag: false,
  //         },
  //       },
  //     },
  //     { returnNewDocument: true }
  //   );

  //   return res.status(200).send(updatedBand);
  // });
};
