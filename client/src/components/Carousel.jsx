import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
function CarouselBox() {
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
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
        responsive={responsive}
        mouseTracking
        infinite={1000}
        animationDuration={1000}
        disableDotsControls
        disableButtonsControls
        autoPlay
        items={items}
        paddingRight={40}
      />
    </Contain>
  );
}

export default CarouselBox;

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
