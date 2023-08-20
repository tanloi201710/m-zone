import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DiscoverCard from "./DiscoverCard";
import { ZingAlbum, ZingSong } from "../types";

interface Props {
  albums: ZingAlbum[];
}

const DiscoverSlider: NextPage<Props> = ({ albums }) => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="col-span-2 row-span-2">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + ' custom-pagination"' + "></span>"
            );
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="discover-swiper">
        {albums.map((item) => (
          <SwiperSlide key={item.encodeId}>
            <DiscoverCard album={item} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default DiscoverSlider;
