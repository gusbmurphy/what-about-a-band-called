// import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from "ts-mongoose";
import { prop, getModelForClass, modelOptions, defaultClasses } from "@typegoose/typegoose"
// import { BandSchema } from "./band-model";
import mongoose from "mongoose";

@modelOptions({ options: {customName: "User"} })
export class UserClass extends defaultClasses.Base {
  @prop({ required: true })
  public name: string;
  @prop({ required: true })
  public passwordHash: string;
  @prop({ required: true })
  public email: string;
  @prop()
  public bandsModified: UserBandModRecord[];
}

type UserBandModRecord = {
  targetBandId: mongoose.Types.ObjectId;
  value: number;
}

export const User = getModelForClass(UserClass);

// const UserBandModRecordSchema = createSchema({
//   targetBandId: Type.ref(Type.objectId({ required: true })).to(
//     "Band",
//     BandSchema
//   ),
//   value: Type.number({ required: true }),
// });

// export const UserSchema = createSchema({
//   name: Type.string({ required: true, unique: true }),
//   passwordHash: Type.string({ required: true }),
//   email: Type.string({ required: true, unique: true }),
//   bandsModified: Type.array().of(UserBandModRecordSchema)
// });

// export const User = typedModel("User", UserSchema);

// export type UserDoc = ExtractDoc<typeof UserSchema>;
// export type UserProps = ExtractProps<typeof UserSchema>;