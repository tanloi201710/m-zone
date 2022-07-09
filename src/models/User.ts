import mongoose, { Document, model, Model, Schema } from "mongoose";

export interface IUser extends Document {
  userName: string;
  password: string;
  imageUrl: string;
  fullName: string;
  musicType: string;
  likes: string[];
}

const UserSchema: Schema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    fullName: {
      type: String,
    },
    musicType: {
      type: String,
    },
    likes: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const User: Model<IUser> =
  mongoose.models.User || model("User", UserSchema);
