import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdPlay } from "react-icons/io";
import { BsApple } from "react-icons/bs";
import { likes } from "../utils/constants";

const Footer = () => {
  return (
    <div>
      <h6 className="text-base font-extrabold opacity-60 mb-2">
        {likes.length} Likes
      </h6>
      {likes.map((value) => (
        <div
          className="flex gap-6  py-3 px-[10px] border-b-[1px] border-b-[#78828c21] hover:bg-[#78828c21] hover:border-b-transparent rounded-sm"
          key={value.name}>
          <Link href="#">
            <div className="w-10 h-10 cursor-pointer">
              <Image
                src={`/${value.image}`}
                width="100"
                height="100"
                alt=""
                layout="responsive"
                className="rounded-sm"
                objectFit="cover"
              />
            </div>
          </Link>
          <div>
            <Link href="#">
              <p className="text-[14px] font-semibold cursor-pointer">
                {value.name}
              </p>
            </Link>
            <p className="text-[12.8px] text-gray-400 hover:text-[#687077] transition-all duration-200 cursor-pointer">
              {value.artist}
            </p>
          </div>
        </div>
      ))}
      <h6 className="text-base font-extrabold opacity-60 my-2">Go mobile</h6>
      <div className="flex gap-2">
        <Link href="#">
          <div className="flex items-center justify-between rounded-sm bg-[#78828c21] hover:bg-[#1c202b] w-[133px] px-3 py-2">
            <div>
              <BsApple size={26} className="" />
            </div>
            <div className="font-semibold leading-none">
              <p className="text-[10.4px] text-gray-400 transition-all duration-200 cursor-pointer">
                Download on the
              </p>
              <p className="text-[14px] cursor-pointer">App Store</p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="flex items-center justify-between rounded-sm bg-[#78828c21] hover:bg-[#1c202b] w-[133px] px-3 py-2">
            <div>
              <IoMdPlay size={26} className="" />
            </div>
            <div className="font-semibold leading-none">
              <p className="text-[10.4px] text-gray-400 transition-all duration-200 cursor-pointer">
                Get it on
              </p>
              <p className="text-[14px] cursor-pointer">Google Play</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full h-[1px] bg-[#78828c21] my-6"></div>
      {/* Horizontal menu */}
      <div className="flex gap-2 opacity-60 text-[12.8px] font-semibold">
        <p className="hover:text-[#687077]">
          <Link href="#">About</Link>
        </p>
        <p className="hover:text-[#687077]">
          <Link href="#">Contact</Link>
        </p>
        <p className="hover:text-[#687077]">
          <Link href="#">Legal</Link>
        </p>
        <p className="hover:text-[#687077]">
          <Link href="#">Policy</Link>
        </p>
      </div>
      <p className="text-[10.4px] opacity-60">© Copyright 2022</p>
    </div>
  );
};

export default Footer;
