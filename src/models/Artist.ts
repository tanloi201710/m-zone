import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IArtist extends Document {
  name: string;
  isMale: boolean;
  age: number;
}

const ArtistSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    isMale: {
      type: Boolean,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Artist: Model<IArtist> =
  mongoose.models.Artist || model("Artist", ArtistSchema);
