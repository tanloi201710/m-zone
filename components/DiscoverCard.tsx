import Image from "next/image";
import React, { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";
import { NextPage } from "next";
import { animated, useSpring } from "@react-spring/web";
import { ZingAlbum } from "../types";

interface Props {
  album: ZingAlbum;
  mark?: boolean;
}

const DiscoverCard: NextPage<Props> = ({ album, mark = true }) => {
  const [actionLayer, setActionLayer] = useState<boolean>(false);
  const styles = useSpring({
    opacity: actionLayer ? 1 : 0,
    config: { duration: 200 },
  });
  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setActionLayer(true)}
      onMouseLeave={() => setActionLayer(false)}
    >
      {mark && (
        <div className="absolute top-0 p-4 z-10 w-full">
          <p className="text-white text-lg font-semibold truncate">{album?.title}</p>
          <p className="text-[12.8px] hover:text-[#687077] transition-all duration-200 cursor-pointer">
            {album?.artistsNames}
          </p>
        </div>
      )}
      <Image
        src={album?.thumbnail.replace('w165', 'w1080')}
        width="100"
        height="100"
        alt=""
        layout="responsive"
        className="rounded-sm"
        objectFit="cover"
      />
      {/* action layer */}
      <animated.div style={styles}>
        {/* play button */}
        <div className="border-[2px] border-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-white transition-all text-white hover:text-black hover:scale-110 z-30">
          <button className="w-10 h-10 flex justify-center items-center rounded-full">
            <IoMdPlay size={18} color="inherit" className="ml-1" />
          </button>
        </div>
        {/* other action */}
        <div className="absolute bottom-1 right-4 flex gap-2 justify-center items-center z-20">
          <button className="w-8 h-8 flex justify-center items-center">
            <MdFavorite size={16} />
          </button>
          <button className="w-8 h-8 flex justify-center items-center">
            <FaEllipsisH size={16} className="ml-1" />
          </button>
        </div>
        <div className="absolute bottom-0 z-10 bg-gradient-to-t from-black to-transparent h-[40px] w-full opacity-80"></div>
      </animated.div>
    </div>
  );
};

export default DiscoverCard;
