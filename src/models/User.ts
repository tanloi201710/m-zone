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
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
      default: "https://i.dlpng.com/static/png/7048718_preview.png",
    },
    musicType: {
      type: String,
      default: "Pop",
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
