import React from "react";
import { albums } from "../utils/constants";
import RecommandCard from "./RecommandCard";

const Recommand = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Recommand for you</h1>
      <div className="grid grid-cols-2 ml-[-10px]">
        {albums.map((album) => (
          <RecommandCard key={album.name} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Recommand;
