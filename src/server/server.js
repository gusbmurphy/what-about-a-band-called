import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { authenticationRoute } from "./routes/authentication";
import { bandRoutes } from "./routes/bands";
import { userCreationRoute } from "./routes/user-creation";

const port = 7777;
const app = express();

app.listen(port, console.log("Server listening on port " + port));

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

authenticationRoute(app);
bandRoutes(app);
userCreationRoute(app);