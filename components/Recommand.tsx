import React from "react";
import RecommandCard from "./RecommandCard";
import useFromStore from "../hooks/useFromStore";
import { useSongsStore } from "../store/useSongsStore";

const Recommand = () => {
  const recommands = useFromStore(useSongsStore, state => state.recommands);
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Recommand for you</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-[-10px]">
        {recommands?.map((song) => (
          <RecommandCard key={song.encodeId} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Recommand;
