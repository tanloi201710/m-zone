import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IPlaylist extends Document {
  userId: string;
  name: string;
}

const PlaylistSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Playlist: Model<IPlaylist> =
  mongoose.models.Playlist || model("Playlist", PlaylistSchema);
