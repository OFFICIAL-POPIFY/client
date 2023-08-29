import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useState } from "react";

function CarouselBox() {
  const [slide, setSlide] = useState("");
  const onSlideChange = (e) => {
    e.preventDefault();
    setSlide(e.items);
  };

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  const images = [
    {
      img: "images/1.jpg",
      text: "이미지1 입니다.",
    },
    {
      img: "images/2.jpg",
      text: "이미지2 입니다.",
    },
    {
      img: "images/3.jpg",
      text: "이미지3 입니다.",
    },
    {
      img: "images/4.jpg",
      text: "이미지4 입니다.",
    },
    {
      img: "images/5.jpg",
      text: "이미지5 입니다.",
    },
    {
      img: "images/6.jpg",
      text: "이미지6 입니다.",
    },
  ];
  const items = images.map((image, index) => {
    return (
      <ItemsContain key={index}>
        <ItemsWrap>
          <img src={image} alt="" />
          <p>{image.text}</p>
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <Contain>
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex={1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlayActionDisabled={true}
        value={slide}
        onChange={onSlideChange}
      >
        {items}
      </AliceCarousel>
    </Contain>
  );
}

const Contain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CarouselBox;
