// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Album } from "../../../src/models";
import { IAlbum } from "../../../src/models/Album";
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
        if (req.query.id !== "") {
          const album = await Album.findById(req.query.id);
          res.status(200).json({ success: true, data: album });
        }
        const albums = await Album.find();
        res.status(200).json({ success: true, data: albums });
      } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, message: "Album not found!" });
      }
      break;

    //   Add data
    case "POST":
      try {
        await connectToDatabase();
        const data: IAlbum = JSON.parse(req.body);
        const newAlbum = new Album(data);
        const savedAlbum = await newAlbum.save();
        res.status(200).json({ success: true, data: savedAlbum });
      } catch (err) {
        res.status(500).json({ success: false, message: "Can't save album!" });
      }
      break;

    //   Delete data
    case "DELETE":
      try {
        const { id } = req.query;
        await connectToDatabase();
        await Album.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Album deleted!" });
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
        const updatedAlbum = Album.findByIdAndUpdate(id, dataUpdate, {
          new: true,
        });
        res.status(200).json({ success: true, data: updatedAlbum });
      } catch (err) {
        res.status(500).send({ success: false, data: "Can't update album!" });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, message: "Method not supported!" });
      break;
  }
}
