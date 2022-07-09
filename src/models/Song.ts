import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface ISong extends Document {
  albumId: string;
  artistId: string;
  name: string;
  url: string;
  fileName: string;
}

const SongSchema: Schema = new Schema(
  {
    albumId: {
      type: String,
    },
    artistId: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Song: Model<ISong> =
  mongoose.models.Song || model("Song", SongSchema);
