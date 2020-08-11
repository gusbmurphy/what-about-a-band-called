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
  getUserRecords,
  getUserProfileEndpoint,
  checkSession,
} from "./paths";
import { postBands, postModifyBand, postNewBand } from "./route-handlers/bands";
import { postUserAuthenticate } from "./route-handlers/user-authentication";
import { postCreateUser } from "./route-handlers/user-creation";
import { postUserRecords } from "./route-handlers/user-records";
import { checkUserSession } from "./route-handlers/check-user-session";
import rateLimit from "express-rate-limit";
import path from "path";
import { getUserProfile } from "./route-handlers/user-profile";
import session from "express-session";
import connectStore from "connect-mongo";
import {
  dbUrl,
  port,
  sessionSecret,
  sessionName,
  sessionLifetime,
  acceptableOrigin
} from "./config";

export const app = express();
const MongoStore = connectStore(session);

mongoose.connect(dbUrl);

app.listen(port);

app.set("trust proxy", 1);

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use("/api/", apiLimiter);
app.use(helmet());
app.use(
  cors({
    origin: acceptableOrigin,
    methods: ["GET", "POST"],
    credentials: true,
  }),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
);
app.use(
  session({
    name: sessionName,
    secret: sessionSecret,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "session",
      ttl: parseInt(sessionLifetime) / 1000,
    }),
    cookie: {
      sameSite: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: parseInt(sessionLifetime),
    },
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../../dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
  });
}

// TODO: A lot of these shouldn't really be POSTs, shouldn't they?
app.post(authenticate, postUserAuthenticate);
app.post(postBandsPath, postBands);
app.post(modifyBand, postModifyBand);
app.post(newBand, postNewBand);
app.post(createUser, postCreateUser);
app.post(getUserRecords, postUserRecords);
app.get(getUserProfileEndpoint, getUserProfile);
app.get(checkSession, checkUserSession);
