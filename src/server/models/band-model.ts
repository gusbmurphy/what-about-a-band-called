import { createSchema, Type, typedModel, ExtractDoc, ExtractProps } from "ts-mongoose";
import { UserSchema } from "./user-model";

export const BandSchema = createSchema({
  name: Type.string({ required: true, unique: true }),
  // TODO: Am I doing something wrong by having a reference to the user and also storing their name here?
  ownerId: Type.ref(Type.objectId({ required: true })).to("User", UserSchema),
  ownerName: Type.string({ required: true }),
  score: Type.number(),
  createdOn: Type.date({ required: true }),
});

export const Band = typedModel("Band", BandSchema);

export type BandDoc = ExtractDoc<typeof BandSchema>;
export type BandProps = ExtractProps<typeof BandSchema>;