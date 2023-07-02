import React from "react";
import { albums } from "../utils/constants";
import TrendingCard from "./TrendingCard";

const New = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New</h1>
      <div className="grid grid-cols-4 gap-4">
        {albums.map((album) => (
          <TrendingCard info={album} key={album.name} />
        ))}
      </div>
    </div>
  );
};

export default New;
