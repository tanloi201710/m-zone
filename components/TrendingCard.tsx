import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  info: {
    name: string;
    artist: string;
    image: string;
  };
}

const TrendingCard: NextPage<Props> = ({ info }) => {
  return (
    <div>
      <div className=" w-full h-full rounded-sm overflow-hidden">
        <Image
          src={`/${info.image}`}
          width="100%"
          height="80%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="pt-[10px] pb-[30px]">
        <p className="text-[14px] font-semibold">{info.name}</p>
        <p className="text-[12.8px] text-gray-400 hover:text-[#687077] transition-all duration-200 cursor-pointer">
          {info.artist}
        </p>
      </div>
    </div>
  );
};

export default TrendingCard;
