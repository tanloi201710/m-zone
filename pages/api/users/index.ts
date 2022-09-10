// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../src/models";
import { IUser } from "../../../src/models/User";
import { connectToDatabase } from "../../../src/utils";

type Data = {
  success: boolean;
  data?: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    // Get data
    case "GET":
      try {
        await connectToDatabase();
        if (req.query.email !== "") {
          const user = await User.find({ email: req.query.email });
          res.status(200).json({ success: true, data: user });
          break;
        }
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
      } catch (err) {
        console.log(err);
        res.json({ success: false, message: "User not found!" });
      }
      break;

    //   Add data
    case "POST":
      try {
        await connectToDatabase();
        const data: IUser = JSON.parse(req.body);
        const newUser = new User(data);
        const savedUser = await newUser.save();
        res.status(200).json({ success: true, data: savedUser });
      } catch (err) {
        res.status(500).json({ success: false, message: "Can't save user!" });
      }
      break;

    //   Delete data
    case "DELETE":
      try {
        const { id } = req.query;
        await connectToDatabase();
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted!" });
      } catch (err) {
        res
          .status(500)
          .json({ success: false, message: "Can't delete album!" });
      }
      break;

    // Update data
    case "PUT":
      try {
        const { id } = req.query;
        await connectToDatabase();
        const dataUpdate = JSON.parse(req.body);
        const updatedUser = User.findByIdAndUpdate(id, dataUpdate, {
          new: true,
        });
        res.status(200).json({ success: true, data: updatedUser });
      } catch (err) {
        res.status(500).send({ success: false, data: "Can't update user!" });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, message: "Method not supported!" });
      break;
  }
}
