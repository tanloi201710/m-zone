// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Playlist } from "../../../src/models";
import { IPlaylist } from "../../../src/models/Playlist";
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
  await connectToDatabase();

  switch (req.method) {
    // Get data
    case "GET":
      try {
        if (req.query.id !== "") {
          const playlist = await Playlist.findById(req.query.id);
          res.status(200).json({ success: true, data: playlist });
        }
        const playlists = await Playlist.find();
        res.status(200).json({ success: true, data: playlists });
      } catch (err) {
        console.log(err);
        res
          .status(404)
          .json({ success: false, message: "Playlist not found!" });
      }
      break;

    //   Add data
    case "POST":
      try {
        const data: IPlaylist = JSON.parse(req.body);
        const newPlaylist = new Playlist(data);
        const savedPlaylist = await newPlaylist.save();
        res.status(200).json({ success: true, data: savedPlaylist });
      } catch (err) {
        res
          .status(500)
          .json({ success: false, message: "Can't save playlist!" });
      }
      break;

    //   Delete data
    case "DELETE":
      try {
        const { id } = req.query;
        await Playlist.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Playlist deleted!" });
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
        const dataUpdate = JSON.parse(req.body);
        const updatedPlaylist = Playlist.findByIdAndUpdate(id, dataUpdate, {
          new: true,
        });
        res.status(200).json({ success: true, data: updatedPlaylist });
      } catch (err) {
        res
          .status(500)
          .send({ success: false, data: "Can't update playlist!" });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, message: "Method not supported!" });
      break;
  }
}
