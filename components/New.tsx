import React from "react";
import TrendingCard from "./TrendingCard";
import useFromStore from "../hooks/useFromStore";
import { useSongsStore } from "../store/useSongsStore";


const New = () => {
  const newSongs = useFromStore(useSongsStore, state => state.news);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
        {newSongs?.map((song) => (
          <TrendingCard info={song} key={song.encodeId} />
        ))}
      </div>
    </div>
  );
};

export default New;
