import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as paths from "./paths";
import * as bandHandlers from "./route-handlers/bands";
import * as authenticationHandlers from "./route-handlers/user-authentication";
import * as userCreationHandlers from "./route-handlers/user-creation";

export const localDbUrl = "mongodb://127.0.0.1:27017/wababc";
const port = 7777;
export const app = express();

mongoose.connect(localDbUrl);

app.listen(port, console.log("Server listening on port " + port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.post(paths.authenticate, authenticationHandlers.postUserAuthenticate);
app.post(paths.postBands, bandHandlers.postBands);
app.post(paths.modifyBand, bandHandlers.postModifyBand);
app.post(paths.newBand, bandHandlers.postNewBand);
app.post(paths.createUser, userCreationHandlers.postCreateUser);