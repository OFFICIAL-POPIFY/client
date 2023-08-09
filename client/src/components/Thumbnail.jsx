import React, { useRef } from "react";
import AliceCarousel, { slidePrev } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useState } from "react";
import classes from "./Thumbnail.module.css";
import PopupData from "./data.json";
import Information from "./Information";
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
    1024: {
      items: 1,
    },
  };

  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
  ];
  const items = images.map((image, index) => {
    return (
      <ItemsContain key={index}>
        <ItemsWrap>
          <img src={image} alt="" />
        </ItemsWrap>
      </ItemsContain>
    );
  });
  const ref = useRef(null);

  return (
    <>
      <Contain>
        <div className={classes.absolute}>
          <button
            className={classes.prevButton}
            onClick={() => ref?.current?.slidePrev()}
          >
            이전
          </button>
          <CarouselBox>
            <AliceCarousel
              animationDuration={2000}
              startIndex={1}
              infinite={1000}
              responsive={responsive}
              mouseTracking
              autoPlay
              autoHeight
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
            이후
          </button>
        </div>
      </Contain>
      <Information placeholder="해시태그를 입력하세요" data={PopupData} />
    </>
  );
}

const Contain = styled.div`
  width: 600px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const CarouselBox = styled.div`
  width: 600px;
  position: relative;
  top: 0;
  left: 0;
`;

const ItemsContain = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  padding: 0 10px;
`;

const ItemsWrap = styled.div`
  display: flex;
  width: 500px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Thumbnail;
