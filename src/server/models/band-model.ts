import { prop, getModelForClass, modelOptions, defaultClasses } from "@typegoose/typegoose";
// import { UserSchema } from "./user-model";
import mongoose from "mongoose";

// TODO: We could have some validators in here... 
@modelOptions({ options: { customName: "Band" } })
export class BandClass extends defaultClasses.Base {
  @prop({ required: true })
  public name: string;
  @prop()
  public score: number;
  @prop({ required: true })
  public ownerId: mongoose.Types.ObjectId;
  @prop({ required: true })
  public ownerName: string;
  @prop({ required: true })
  public createdOn: Date;
}

export const Band = getModelForClass(BandClass);

// export const BandSchema = createSchema({
//   name: Type.string({ required: true, unique: true }),
//   ownerId: Type.ref(Type.objectId({ required: true })).to("User", UserSchema),
//   ownerName: Type.string({ required: true }),
//   score: Type.number(),
//   createdOn: Type.date({ required: true }),
// });

// export const Band = typedModel("Band", BandSchema);

// export type BandDoc = ExtractDoc<typeof BandSchema>;
// export type BandProps = ExtractProps<typeof BandSchema>;
