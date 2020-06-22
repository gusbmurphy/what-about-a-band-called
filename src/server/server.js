import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { authenticationRoute } from "./routes/authentication";
import { bandRoutes } from "./routes/bands";
import { userCreationRoute } from "./routes/user-creation";

export const dbUrl = "mongodb://127.0.0.1:27017/wababc";
const port = 7777;
export const app = express();

mongoose.connect(dbUrl);

app.listen(port, console.log("Server listening on port " + port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);
bandRoutes(app);
userCreationRoute(app);