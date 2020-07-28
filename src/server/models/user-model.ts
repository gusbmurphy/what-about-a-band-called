// import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from "ts-mongoose";
import {
  prop,
  getModelForClass,
  modelOptions,
  defaultClasses,
  DocumentType,
  Ref
} from "@typegoose/typegoose";
// import { BandSchema } from "./band-model";
import mongoose from "mongoose";
import { Band, BandClass } from "./band-model";

// TODO: Add point related instance methods.

@modelOptions({ options: { customName: "User" } })
export class UserClass extends defaultClasses.Base {
  @prop({ required: true })
  public name: string;
  @prop({ required: true })
  public passwordHash: string;
  @prop({ required: false })
  public email: string;
  // @prop({ ref: () => BandClass, default: [] })
  // public ownBands: Ref<BandClass>[];
  @prop()
  public bandsModified: UserBandModRecord[];

  public async getTotalScore(this: DocumentType<UserClass>): Promise<number> {
    const usersBands = await Band.find({ ownerId: this._id });
    let totalScore = 0;
    usersBands.map((band) => (totalScore += band.score));
    return Promise.resolve(totalScore);
  }

  public async getAverageScore(this: DocumentType<UserClass>): Promise<number> {
    const usersBands = await Band.find({ ownerId: this._id });
    let averageScore = 0;
    for (let i = 0; i < usersBands.length; i++) {
      averageScore = (averageScore + usersBands[i].score) / (i + 1);
    }
    return Promise.resolve(averageScore);
  }

  public async getNumOfNamesContributed(
    this: DocumentType<UserClass>
  ): Promise<number> {
    return Band.count({ ownerId: this._id });
  }
}

type UserBandModRecord = {
  targetBandId: mongoose.Types.ObjectId;
  value: number;
};

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
