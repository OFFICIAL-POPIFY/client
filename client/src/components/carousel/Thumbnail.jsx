import React, { useRef } from "react";
import AliceCarousel, { slidePrev } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useState } from "react";
import classes from "./Thumbnail.module.css";
import PopupData from "../../../src/components/data.json";
import Information from "../Information";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

function Thumbnail() {
  const [slide, setSlide] = useState("");
  const onSlideChange = (e) => {
    e.preventDefault();
    setSlide(e.item);
  };

  const responsive = {
    0: {
      items: 1,
    },
    2000: {
      items: 1,
    },
  };

  const images = [
    {
      img: "./images/test.png",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F23B7F6778DF24338A60A959F49A7C117",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FD2502AAEB7B24861B813B3515FB9C198",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F05C70613570148958BF42507BA77BAF4",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FFFA62748275A49B28C48287C7326D403",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F2875A7FD61F84B22B7E44AF1D5468AF8",
    },
  ];
  const items = images.map((image, index) => {
    return (
      <ItemsContain key={index}>
        <ItemsWrap>
          <img src={image.img} alt="" />
        </ItemsWrap>
        <div>
          <a className={classes.link} href={image.link}>
            <h2 className={classes.text}>{image.text}</h2>
          </a>
        </div>
      </ItemsContain>
    );
  });
  const ref = useRef(null);

  return (
    <Wrapper>
      <div>
        <Contain>
          <div className={classes.absolute}>
            <button
              className={classes.prevButton}
              onClick={() => ref?.current?.slidePrev()}
            >
              <FaChevronLeft size="15" />
            </button>
            <CarouselBox>
              <AliceCarousel
                animationDuration={2000}
                startIndex={1}
                infinite={1000}
                responsive={responsive}
                mouseTracking
                autoPlay
                disableDotsControls
                disableButtonsControls
                value={slide}
                onChange={onSlideChange}
                ref={ref}
              >
                {items}
              </AliceCarousel>
            </CarouselBox>
            <button
              className={classes.nextButton}
              onClick={() => ref?.current?.slideNext()}
            >
              <FaChevronRight size="15" />
            </button>
          </div>
        </Contain>
      </div>

      <div></div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 75rem;
  height: 23.75rem;
  display: flex;
  margin: 40px 0px 35px 0px;
  justify-content: space-between;
`;
const Contain = styled.div`
  width: 49.375rem;
  height: 23.75rem;
  justify-content: space-between;
`;

const CarouselBox = styled.div`
  width: 49.375rem;
  height: 23.75rem;
  flex-shrink: 0;
`;

const ItemsContain = styled.div`
  flex-direction: column;
  width: fit-content;
  display: flex;
`;

const ItemsWrap = styled.div`
  img {
    width: 49.375rem;
    height: 23.75rem;
  }
  display: flex;
  flex-shrink: 0;
  width: fit-content;
  overflow: visible;
`;

export default Thumbnail;
