import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from "ts-mongoose";
import { BandSchema } from "./band-model";

const UserBandModRecordSchema = createSchema({
  targetBandId: Type.ref(Type.objectId({ required: true })).to(
    "Band",
    BandSchema
  ),
  value: Type.number({ required: true }),
});

export const UserSchema = createSchema({
  name: Type.string({ required: true, unique: true }),
  passwordHash: Type.string({ required: true }),
  email: Type.string({ required: true, unique: true }),
  bandsModified: Type.array().of(UserBandModRecordSchema)
});

export const User = typedModel("User", UserSchema);

export type UserDoc = ExtractDoc<typeof UserSchema>;
export type UserProps = ExtractProps<typeof UserSchema>;