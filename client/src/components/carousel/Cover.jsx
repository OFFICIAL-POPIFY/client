import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../../api/axios";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "./Cover.css";
import { EffectCoverflow, Pagination, Navigation, Mousewheel } from "swiper";

function Cover() {
  const LATEST_URL = `${process.env.REACT_APP_BASE_URL}/popups/latest`;
  const [latestData, setLatestData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  useEffect(() => {
    axios
      .get(LATEST_URL)
      .then((response) => {
        setLatestData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <div className="wrap">
        <div className="container">
          {latestData.length > 0 && ( // latestData가 존재할 때에만 Swiper 컴포넌트 렌더링
            <Swiper
              onSlideChangeTransitionEnd={handleSlideChange}
              centeredSlides={true}
              effect={"coverflow"}
              grabCursor={true}
              spaceBetween={-300}
              height={700}
              autoPlay
              loop={true}
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
              {latestData.map((latest, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`slider__img ${
                      isHovered && index === currentSlide
                        ? "expand-animation"
                        : ""
                    }`}
                  >
                    <img
                      src={latest.popup_imgs[0]} // 이미지 URL이 배열로 들어있으므로 첫 번째 이미지만 사용
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Cover;
