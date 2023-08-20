import React from "react";
import { NextPage } from "next";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { albums } from "../utils/constants";
import TrendingCard from "./TrendingCard";
import { ZingSong } from "../types";

interface Props {
  songs: ZingSong[];
}

const Trending: NextPage<Props> = ({ songs }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Trending</h1>
      <Swiper
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + ' custom-pagination"' + "></span>"
            );
          },
        }}
        className="trending-swiper">
        {songs.map((item, index) => (
          <SwiperSlide key={item.encodeId}>
            <TrendingCard info={item} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mt-2"></div>
      </Swiper>
    </>
  );
};

export default Trending;
