"use client"

import React, { useState, useEffect } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendingCard from "./TrendingCard";
import useFromStore from "../hooks/useFromStore";
import { useSongsStore } from "../store/useSongsStore";

const Trending = () => {
  const trendings = useFromStore(useSongsStore, (state) => state.trendings);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function handleWindowSizeChange() {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Trending</h1>
      <Swiper
        modules={[Pagination]}
        slidesPerView={isMobile ? 2 : 3}
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
        className="trending-swiper"
      >
        {trendings?.map((item, index) => (
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
