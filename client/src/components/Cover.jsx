import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import "./Cover.css";
import { EffectCoverflow, Pagination, Navigation, Mousewheel } from "swiper";

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];
function Cover() {
  const [blur, setBlur] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex); // Swiper의 realIndex는 현재 실제 슬라이드 인덱스를 나타냄
    if (
      swiper.realIndex === 0 ||
      swiper.realIndex === images.length - 1 ||
      (swiper.realIndex > 0 && swiper.realIndex < images.length - 1)
    ) {
      setBlur("blur");
    } else {
      setBlur("");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">팝업스토어 갤러리</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        mouseWheel={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          mousewheel: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
          mousewheel: true,
        }}
        onSlideChange={handleSlideChange}
        modules={{ EffectCoverflow, Pagination, Navigation, Mousewheel }}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt=""
              className={index === currentSlide ? "" : blur}
            />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Cover;
