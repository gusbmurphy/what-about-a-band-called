import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
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
import rateLimit from "express-rate-limit"

export const localDbUrl = "mongodb://127.0.0.1:27017/wababc";
const port = process.env.NODE_ENV || 7777;
export const app = express();

const dbUrl = process.env.MONGODB_URI || localDbUrl;
mongoose.connect(dbUrl);

app.listen(port);

app.set('trust proxy', 1);
 
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use("/api/", apiLimiter);

app.use(helmet());
app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
// TODO: A lot of these shouldn't really be POSTs, shouldn't they?
app.post(authenticate, postUserAuthenticate);
app.post(postBandsPath, postBands);
app.post(modifyBand, postModifyBand);
app.post(newBand, postNewBand);
app.post(createUser, postCreateUser);
app.post(getUserRecords, postUserRecords);