import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import * as authenticationHandlers from "./route-handlers/authentication";
import * as bandHandlers from "./route-handlers/bands";
import * as userCreationHandlers from "./route-handlers/user-creation";

export const dbUrl = "mongodb://127.0.0.1:27017/wababc";
const port = 7777;
export const app = express();

mongoose.connect(dbUrl);

app.listen(port, console.log("Server listening on port " + port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

app.post("/authenticate", authenticationHandlers.postUserAuthenticate);
app.get("/bands/get", bandHandlers.getBands);
app.post("/band/modify", bandHandlers.postModifyBand);
app.post("/band/new", bandHandlers.postNewBand);
app.post("/create-user", userCreationHandlers.postCreateUser);