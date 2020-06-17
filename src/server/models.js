import { Schema, ObjectId } from "mongoose"

import { getConnection } from "./connect-db";

let connection = getConnection();

let bandSchema = new Schema({
    name: { type: String, required: true },
    ownerId: { type: ObjectId, required: true },
    score: Number
});
export const Band = connection.model("Band", bandSchema);

let bandModificationSchema = new Schema({
    ownerId: { type: ObjectId, required: true },
    bandId: { type: ObjectId, required: true },
    value: { type: Number, required: true }
});
export const BandModification = connection.model("BandModification", bandModificationSchema);

let userSchema = new Schema({
    name: { type: String, required: true },
    passwordHash: { type: String, required: true }
});
export const User = connection.model("User", userSchema);