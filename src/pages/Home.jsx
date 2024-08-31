import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Home = () => {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]}>
      <SwiperSlide>
        <img
          className="w-full h-[500px] rounded-[20px]"
          src="http://priroda.club/uploads/posts/2022-07/1658478016_13-priroda-club-p-krasivie-prirodnie-peizazhi-priroda-krasiv-13.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[500px] rounded-[20px]"
          src="https://avatars.mds.yandex.net/get-mpic/4250892/img_id7308495539727831386.jpeg/orig"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[500px] rounded-[20px]"
          src="https://www.lg.com/ru/images/TV/features/FHD2021/TV-FHD-02-Picture-Quality-Desktop.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[500px] rounded-[20px]"
          src="https://kreativland.ru/images_product/ras2292.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
