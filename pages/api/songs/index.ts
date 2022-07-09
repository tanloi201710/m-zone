// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Song } from "../../../src/models";
import { ISong } from "../../../src/models/Song";
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
          const song = await Song.findById(req.query.id);
          res.status(200).json({ success: true, data: song });
        }
        const songs = await Song.find();
        res.status(200).json({ success: true, data: songs });
      } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, message: "Song not found!" });
      }
      break;

    //   Add data
    case "POST":
      try {
        await connectToDatabase();
        const data: ISong = JSON.parse(req.body);
        const newSong = new Song(data);
        const savedSong = await newSong.save();
        res.status(200).json({ success: true, data: savedSong });
      } catch (err) {
        res.status(500).json({ success: false, message: "Can't save song!" });
      }
      break;

    //   Delete data
    case "DELETE":
      try {
        const { id } = req.query;
        await connectToDatabase();
        await Song.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Song deleted!" });
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
        const updatedSong = Song.findByIdAndUpdate(id, dataUpdate, {
          new: true,
        });
        res.status(200).json({ success: true, data: updatedSong });
      } catch (err) {
        res.status(500).send({ success: false, data: "Can't update song!" });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, message: "Method not supported!" });
      break;
  }
}
