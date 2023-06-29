import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default function ProjectSlide({}) {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return (
    <div>
      <Swiper
        className="ProjectSlide"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

ProjectSlide.defaultProps = {};
