import React from "react";
import { albums } from "../utils/constants";
import DiscoverCard from "./DiscoverCard";

const New = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New</h1>
      <div className="grid grid-cols-4 gap-4">
        {albums.map((album) => (
          <DiscoverCard album={album} mark={false} />
        ))}
      </div>
    </div>
  );
};

export default New;
