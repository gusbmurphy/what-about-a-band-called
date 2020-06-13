import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { authenticationRoute } from "./authenticate"
import { connectDB } from "./connect-db";
import "./initialize-db";

const port = 7777;
const app = express();

app.listen(port, console.log("Server listening on port " + port));

app.use(
    cors(),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
);

authenticationRoute(app);

export const addNewBand = async (band) => {
    var db = await connectDB();
    var collection = db.collection("bands");
    await collection.insertOne(band);
}

app.post("/band/new", async (req, res) => {
    var band = req.body
    await addNewBand(band);
    res.status(200).send();
});

// app.post("/band/modify", async (req, res) => {
// });