import {
  createSchema,
  Type,
  typedModel,
  ExtractDoc,
  ExtractProps,
} from "ts-mongoose";
import { BandSchema } from "./band-model";
import { UserSchema } from "./user-model";

export const BandModificationSchema = createSchema({
  ownerId: Type.ref(Type.objectId({ required: true })).to("User", UserSchema),
  bandId: Type.ref(Type.objectId({ required: true })).to("Band", BandSchema),
});

export const BandModification = typedModel(
  "BandModification",
  BandModificationSchema
);

export type BandModificationDoc = ExtractDoc<typeof BandModificationSchema>;
export type BandModificationProps = ExtractProps<typeof BandModificationSchema>;
