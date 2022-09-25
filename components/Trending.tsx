import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { albums } from "../utils/constants";
import TrendingCard from "./TrendingCard";

const Trending = () => {
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
        {albums.map((item, index) => (
          <SwiperSlide key={item.name}>
            <TrendingCard info={item} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mt-2"></div>
      </Swiper>
    </>
  );
};

export default Trending;
