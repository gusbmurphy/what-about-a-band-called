import { v1 as uuid } from "uuid";
import md5 from "md5";
import { connectDB } from "./connect-db";

const authenticationTokens = [];

// async function assembleUserState(user) {
//     var db = await connectDB();
// }

export const authenticationRoute = app => {
    app.post("/authenticate", async (req, res) => {
        var { username, password } = req.body;
        var db = await connectDB();
        var collection = db.collection("users");

        var user = await collection.findOne({ name: username });
        if (!user) {
            return res.status(500).send("Username not found.");
        }

        var hash = md5(password);
        var passwordCorrect = hash === user.passHash;

        if (!passwordCorrect) {
            return res.status(500).send("Incorrect password.");
        }

        var token = uuid();
        authenticationTokens.push({
            token,
            userID: user.id
        });

        var state = {};
        res.send({token, state});
    });

}