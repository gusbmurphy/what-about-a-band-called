// import {
//   createSchema,
//   Type,
//   typedModel,
//   ExtractDoc,
//   ExtractProps,
// } from "ts-mongoose";
// import { BandSchema } from "./band-model";
// import { UserSchema } from "./user-model";
import { prop, getModelForClass, modelOptions, defaultClasses } from "@typegoose/typegoose";
import mongoose from "mongoose";

@modelOptions({ options: { customName: "BandModification" }})
export class BandModificationClass extends defaultClasses.Base {
  @prop({required: true})
  public ownerId: mongoose.Types.ObjectId;
  @prop({required: true})
  public bandId: mongoose.Types.ObjectId;
  @prop({required: true})
  public value: number;
}

export const BandModification = getModelForClass(BandModificationClass);

// export const BandModificationSchema = createSchema({
//   ownerId: Type.ref(Type.objectId({ required: true })).to("User", UserSchema),
//   bandId: Type.ref(Type.objectId({ required: true })).to("Band", BandSchema),
// });

// export const BandModification = typedModel(
//   "BandModification",
//   BandModificationSchema
// );

// export type BandModificationDoc = ExtractDoc<typeof BandModificationSchema>;
// export type BandModificationProps = ExtractProps<typeof BandModificationSchema>;
