// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SwiperIg.css";

// import required modules
import { Navigation } from "swiper";

import img1 from './imgSwiper/1.jpg'
import img2 from './imgSwiper/2.jpg'
import img3 from './imgSwiper/3.jpg'
import img4 from './imgSwiper/4.jpg'
import img5 from './imgSwiper/5.jpg'
import img6 from './imgSwiper/6.jpg'
import img7 from './imgSwiper/7.jpg'
import img8 from './imgSwiper/8.jpg'
import img9 from './imgSwiper/9.jpg'
import img10 from './imgSwiper/10.jpg'

const breakP = {
    360: {
        slidesPerView:1,
        spaceBetween:10
    },

    480: {
        slidesPerView:2,
        spaceBetween:10
    },
    640: {
        slidesPerView:3,
        spaceBetween:15
    },
    880: {
        slidesPerView:4,
        spaceBetween:20
    },
    1200: {
        slidesPerView:5,
        spaceBetween:20
    }
}

export default function SwiperIg() {
  return (
    <>
        <div className="container-texto-swiper">
            <h2 className="ig-text">@Vopero <span className="ig-text2">en Instagram</span></h2>
        </div>
        <Swiper
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={breakP}
        className="mySwiper"
        >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
        </Swiper>
    </>
  );
}