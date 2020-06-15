import { connectDB } from "../connect-db";

export const bandRoutes = (app) => {
  app.get("/bands/get", async (req, res) => {
    let db = await connectDB();
    let bands = db.collection("bands");
    if (!bands) return res.status(500);
    bands.find({}).toArray(function(err, result) {
      if (err) res.status(500);
      res.status(200).send(result);
    });
    // return res.status(200);
  });

  app.post("/band/new", async (req, res) => {
    let band = req.body;
    await addNewBand(band);
    return res.status(200).send();
  });

  app.post("/band/modify", async (req, res) => {
    let { bandID, modifyingUserID, value } = req.body;
    let db = await connectDB();

    let bands = db.collection("bands");
    let band = await bands.findOne({ id: bandID });
    if (!band) return res.status(500).send("Target band to modify not found.");

    // Check to see if this band has already been modified by the user
    let users = db.collection("users");
    let user = await users.findOne({ id: modifyingUserID });
    if (!user) return res.status(500).send("User attempting to modify not found.");

    let userHasModified = user.modifications.some(
      (modification) => modification.bandID === bandID
    );
    console.log("userHasModified: " + userHasModified);
    if (userHasModified)
      return res.status(500).send("User has already modified target band.");

    // TODO: Allow for flags to be added
    // If we've reached this point, we can actually modify the band
    await bands.findOneAndUpdate(
      { id: bandID },
      {
        $inc: { score: value },
        $push: {
          modifications: { userID: modifyingUserID, value, isFlag: false },
        },
      }
    );

    // Also add the modification to the user document
    await users.findOneAndUpdate(
      { id: modifyingUserID },
      {
        $push: {
          modifications: { bandID: bandID, value, isFlag: false },
        },
      }
    );

    return res.status(200).send();
  });
};

const addNewBand = async (band) => {
  let db = await connectDB();
  let collection = db.collection("bands");
  await collection.insertOne(band);
};
