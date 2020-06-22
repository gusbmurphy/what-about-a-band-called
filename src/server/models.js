import mongoose from "mongoose";

let bandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ownerId: { type: mongoose.ObjectId, required: true },
    score: Number
});
export const Band = mongoose.model("Band", bandSchema);

let bandModificationSchema = new mongoose.Schema({
    ownerId: { type: mongoose.ObjectId, required: true },
    bandId: { type: mongoose.ObjectId, required: true },
    value: { type: Number, required: true }
});
export const BandModification = mongoose.model("BandModification", bandModificationSchema);

let userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    passwordHash: { type: String, required: true }
});
export const User = mongoose.model("User", userSchema);