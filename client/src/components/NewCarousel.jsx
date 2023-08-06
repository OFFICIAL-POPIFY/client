import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
function NewCarouselBox() {
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const images = [
    {
        img: "images/1.jpg",
        text: "이미지1 입니다.",
    },
    {
        img:  "images/2.jpg",
        text: "이미지2 입니다.",
    },
    {
        img:  "images/3.jpg",
        text: "이미지3 입니다.",
    },
    {
        img:  "images/4.jpg",
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
  const items = images.map((image) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <img src={image.img} alt="" />
          <p>{image.text}</p>
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

export default NewCarouselBox;

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
  height: 220px;
  overflow: hidden;
  margin: 0 20px;

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
`;