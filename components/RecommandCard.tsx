import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { IoMdPlay } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { FaEllipsisH } from "react-icons/fa";
import { ZingSong } from "../types";

interface Props {
  song: ZingSong;
}

const RecommandCard: NextPage<Props> = ({ song }) => {
  const [actionLayer, setActionLayer] = useState<boolean>(false);
  const styles = useSpring({
    opacity: actionLayer ? 1 : 0,
    config: { duration: 200 },
  });
  return (
    <div
      className="group h-[84px] w-full py-3 px-[10px] hover:bg-[#78828c21] rounded-sm relative group-hover:last:border-b-transparent"
      onMouseEnter={() => setActionLayer(true)}
      onMouseLeave={() => setActionLayer(false)}>
      <div className="inline-flex w-full">
        <Link href="#">
          <div className="min-w-[60px] min-h-[60px] cursor-pointer mr-3">
            <Image
              src={song?.thumbnail.replace('w165', 'w720')}
              width="100"
              height="100"
              alt=""
              layout="responsive"
              className="rounded-sm"
              objectFit="cover"
            />
          </div>
        </Link>
        <div className="truncate">
          <Link href="#">
            <p className="text-[14px] truncate font-semibold cursor-pointer pr-16">
              {song?.title}
            </p>
          </Link>
          <p className="text-[12.8px] text-gray-400 hover:text-[#687077] transition-all duration-200 cursor-pointer">
            {song?.artistsNames}
          </p>
        </div>
      </div>
      <div className="absolute border-b-[1px] border-b-[#78828c20] bottom-0 left-[10px] right-[10px] group-hover:border-b-transparent"></div>
      <animated.div style={styles}>
        {/* play button */}
        <div className="border-[2px] border-white rounded-full absolute top-1/2 left-10 -translate-x-1/2 -translate-y-1/2 hover:bg-white transition-all text-white hover:text-black hover:scale-110 z-30">
          <button className="w-10 h-10 flex justify-center items-center rounded-full">
            <IoMdPlay size={18} color="inherit" className="ml-1" />
          </button>
        </div>
        {/* other action */}
        <div className="absolute top-1 right-4 flex justify-center items-center z-20">
          <button className="w-8 h-8 flex justify-center items-center">
            <MdFavorite size={16} />
          </button>
          <button className="w-8 h-8 flex justify-center items-center">
            <FaEllipsisH size={16} className="ml-1" />
          </button>
        </div>
      </animated.div>
    </div>
  );
};

export default RecommandCard;
