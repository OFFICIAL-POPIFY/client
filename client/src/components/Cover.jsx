import React, { useState, useEffect } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div>
      <div>
        <div className="container">
          <Swiper
            onSlideChangeTransitionEnd={handleSlideChange}
            centeredSlides={true}
            effect={"coverflow"}
            grabCursor={true}
            spaceBetween={-300}
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
                <div
                  className={`slider__img ${
                    isHovered && index === currentSlide
                      ? "expand-animation"
                      : ""
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className={`swiper-slide-image ${
                      index === currentSlide ? "hovered" : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow blur">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow blur">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Cover;
