import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import {
  authenticate,
  postBands as postBandsPath,
  modifyBand,
  newBand,
  createUser,
  getUserRecords
} from "./paths";
import { postBands, postModifyBand, postNewBand } from "./route-handlers/bands";
import { postUserAuthenticate } from "./route-handlers/user-authentication";
import { postCreateUser } from "./route-handlers/user-creation";
import { postUserRecords } from "./route-handlers/user-records";

export const localDbUrl = "mongodb://127.0.0.1:27017/wababc";
const port = 7777;
export const app = express();

mongoose.connect(localDbUrl);

app.listen(port, console.log("Server listening on port " + port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
// TODO: A lot of these shouldn't really be POSTs, shouldn't they?
app.post(authenticate, postUserAuthenticate);
app.post(postBandsPath, postBands);
app.post(modifyBand, postModifyBand);
app.post(newBand, postNewBand);
app.post(createUser, postCreateUser);
app.post(getUserRecords, postUserRecords);