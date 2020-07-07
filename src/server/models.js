// @flow

import mongoose from "mongoose";

function foo(x: ?number): string {
  if (x) {
    return x;
  }
  return "default string";
}

let bandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ownerId: { type: mongoose.ObjectId, required: true },
  ownerName: { type: String, required: true },
  score: Number,
  createdOn: Date,
});
export const Band = mongoose.model("Band", bandSchema);

let bandModificationSchema = new mongoose.Schema({
  ownerId: { type: mongoose.ObjectId, required: true },
  bandId: { type: mongoose.ObjectId, required: true },
  value: { type: Number, required: true },
});
export const BandModification = mongoose.model(
  "BandModification",
  bandModificationSchema
);

let userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  passwordHash: { type: String, required: true },
  bandsModified: { type: [{ targetBandId: String, value: Number }], default: [] },
});
export const User = mongoose.model("User", userSchema);
