import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { TbArrowsShuffle, TbRepeat } from "react-icons/tb";
import { IoMdPlay, IoMdVolumeLow } from "react-icons/io";
import { ImPrevious2, ImNext2 } from "react-icons/im";
import { BsList } from "react-icons/bs";
import PlayList from "./PlayList";

interface Props {
  album: {
    name: string;
    artist: string;
    image: string;
  };
}

const Player: NextPage<Props> = ({ album }) => {
  const [openPlayList, setOpenPlayList] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  return (
    <>
      <div
        tabIndex={0}
        onBlur={() => setOpenPlayList(false)}
        className="h-[55px] bg-[#363c43] flex text-gray-200 overflow-x-hidden justify-between border-t-[5px] border-t-gray-500/75 md:border-t-0"
      >
        {/* info */}
        <div className="flex min-w-[180px]">
          <Image
            src={`/${album.image}`}
            width={60}
            height={60}
            alt=""
            layout="intrinsic"
            objectFit="cover"
          />
          <div className="flex flex-col flex-1 md:border-t-[5px] border-t-gray-500/75 pl-4 justify-center">
            <p className="text-[11px] font-bold text-gray-200">{album.name}</p>
            <p className="text-[11px] text-gray-400">{album.artist}</p>
          </div>
        </div>
        {/* main */}
        <div className="hidden flex-1 justify-between items-center md:border-t-[5px] border-t-gray-500/75 md:flex">
          {/* like */}
          <button
            className="w-7 h-7 rounded-[0.2rem] flex justify-center items-center hover:bg-[#ffffff11] mx-4"
            onClick={() => setIsLiked((prev) => !prev)}
          >
            {isLiked ? (
              <MdFavorite size={18} />
            ) : (
              <MdFavoriteBorder size={18} />
            )}
          </button>
          {/* action */}
          <div className="flex items-center -translate-x-14">
            <button
              className={`w-10 h-10 flex justify-center items-center ${
                isShuffle ? "text-gray-200" : "text-gray-400"
              }`}
              onClick={() => setIsShuffle((prev) => !prev)}
            >
              <TbArrowsShuffle size={18} />
            </button>
            <button className="w-10 h-10 flex justify-center items-center">
              <ImPrevious2 size={18} />
            </button>
            <button className="w-10 h-10 flex justify-center items-center bg-[#02b875] rounded-full">
              <IoMdPlay size={18} className="ml-[3px]" />
            </button>
            <button className="w-10 h-10 flex justify-center items-center">
              <ImNext2 size={18} />
            </button>
            <button
              className={`w-10 h-10 flex justify-center items-center ${
                isRepeat ? "text-gray-200" : "text-gray-400"
              }`}
              onClick={() => setIsRepeat((prev) => !prev)}
            >
              <TbRepeat size={18} />
            </button>
          </div>
          {/* adjustment */}
          <div className="flex items-center">
            {/* time */}
            <span className="text-gray-400 text-xs mr-3">00:00 / 00:00</span>
            {/* volume */}
            <span className="w-10 h-10 flex justify-center items-center">
              <IoMdVolumeLow size={18} />
            </span>
            {/* playlist */}
            <button
              className="w-10 h-10 flex justify-center items-center"
              onClick={() => setOpenPlayList((prev) => !prev)}
            >
              <BsList size={18} />
            </button>
          </div>
        </div>
        {/* Mobile view */}
        <div className="flex items-center float-right md:hidden">
          <button
            className="w-7 h-7 rounded-[0.2rem] flex justify-center items-center hover:bg-[#ffffff11] mx-4"
            onClick={() => setIsLiked((prev) => !prev)}
          >
            {isLiked ? (
              <MdFavorite size={18} />
            ) : (
              <MdFavoriteBorder size={18} />
            )}
          </button>
          <button className="w-10 h-10 flex justify-center items-center bg-[#02b875] rounded-full">
            <IoMdPlay size={18} className="ml-[3px]" />
          </button>
          <button className="w-10 h-10 flex justify-center items-center">
            <ImNext2 size={18} />
          </button>
          <button
            className="w-10 h-10 flex justify-center items-center"
            onClick={() => setOpenPlayList((prev) => !prev)}
          >
            <BsList size={18} />
          </button>
        </div>
      </div>
      {openPlayList && (
        <div className="fixed bottom-[55px] right-0 w-screen md:w-[480px] h-[240px] overflow-y-auto">
          <PlayList />
        </div>
      )}
    </>
  );
};

export default Player;
