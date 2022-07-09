import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IPlaylistSong extends Document {
  playlistId: string;
  songId: string;
}

const PlaylistSongSchema: Schema = new Schema(
  {
    playlistId: {
      type: String,
      required: true,
    },
    songId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const PlaylistSong: Model<IPlaylistSong> =
  mongoose.models.PlaylistSong || model("PlaylistSong", PlaylistSongSchema);
