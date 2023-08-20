import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { ZingSong } from "../types";

interface Props {
  info: ZingSong;
}

const TrendingCard: NextPage<Props> = ({ info }) => {
  return (
    <div>
      <div className=" w-full rounded-sm overflow-hidden">
        <Image
          src={info?.thumbnailM.replace('w240', 'w720')}
          width="100"
          height="80"
          alt=""
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="pt-[10px] pb-[30px]">
        <p className="text-[14px] font-semibold">{info?.title}</p>
        <p className="text-[12.8px] text-gray-400 hover:text-[#687077] transition-all duration-200 cursor-pointer">
          {info?.artistsNames}
        </p>
      </div>
    </div>
  );
};

export default TrendingCard;
