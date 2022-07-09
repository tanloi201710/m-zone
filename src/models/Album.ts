import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IAlbum extends Document {
  artistId: string;
  name: string;
}

const AlbumSchema: Schema = new Schema(
  {
    artistId: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Album: Model<IAlbum> =
  mongoose.models.Album || model("Album", AlbumSchema);
