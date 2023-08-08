import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useState } from "react";

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
  const items = images.map((image) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <img src={image} alt="" />
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <Contain>
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
      >
        {items}
      </AliceCarousel>
    </Contain>
  );
}

const Contain = styled.div`
  width: 600px;
  position: relative;
  align-items: left;
  margin: 0 auto;
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
