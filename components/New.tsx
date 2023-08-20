import React from "react";
import { NextPage } from "next";
import TrendingCard from "./TrendingCard";
import { ZingSong } from "../types";

interface Props {
  songs: ZingSong[];
}

const New: NextPage<Props> = ({ songs }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New</h1>
      <div className="grid grid-cols-4 gap-4">
        {songs.map((song) => (
          <TrendingCard info={song} key={song.encodeId} />
        ))}
      </div>
    </div>
  );
};

export default New;
