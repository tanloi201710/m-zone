// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Artist } from "../../../src/models";
import { IArtist } from "../../../src/models/Artist";
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
    case "GET":
      try {
        if (req.query.id !== "") {
          const artist = await Artist.findById(req.query.id);
          res.status(200).json({ success: true, data: artist });
        }
        const artists = await Artist.find();
        res.status(200).json({ success: true, data: artists });
      } catch (err) {
        console.log(err);
        res.status(404).json({ success: false, message: "Artist not found!" });
      }
      break;

    case "POST":
      try {
        const data: IArtist = JSON.parse(req.body);
        const newArtist = new Artist(data);
        const savedArtist = await newArtist.save();
        res.status(200).json({ success: true, data: savedArtist });
      } catch (err) {
        res.status(500).json({ success: false, message: "Can't save artist!" });
      }
      break;

    case "DELETE":
      try {
        const { id } = req.query;
        await Artist.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Artist deleted!" });
      } catch (err) {
        res
          .status(500)
          .json({ success: false, message: "Can't delete artist!" });
      }
      break;

    case "PUT":
      try {
        const { id } = req.query;
        const dataUpdate = JSON.parse(req.body);
        const updatedArtist = Artist.findByIdAndUpdate(id, dataUpdate, {
          new: true,
        });
        res.status(200).json({ success: true, data: updatedArtist });
      } catch (err) {
        res.status(500).send({ success: false, data: "Can't update artist!" });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, message: "Method not supported!" });
      break;
  }
}
