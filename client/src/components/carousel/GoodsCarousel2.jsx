import React, { useState, useRef, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import classes from "./Thumbnail.module.css";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
function GoodsCarousel() {
  const GOODS_URL = `${process.env.REACT_APP_BASE_URL}/goods/:id`;
  const [slide, setSlide] = useState("");
  const onSlideChange = (e) => {
    e.preventDefault();
    setSlide(e.item);
  };

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };

  const images = [
    {
      name: "플레이 에디션",
      img: "../images/goods2/goods1.png",
      price: "125,000원",
    },
    {
      name: "실리콘 네임택",
      img: "../images/goods2/goods2.png",
      price: "4,000원",
    },
    {
      name: "실리콘 나눔톡",
      img: "../images/goods2/goods3.png",
      price: "6,000원",
    },
    {
      name: "스티커",
      img: "../images/goods2/goods4.png",
      price: "2,500원",
    },
  ];
  const items = images.map((image) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <Card>
            <div className="outter">
              <div className="inner"></div>
              <div>
                <img src={image.img} alt="" />
              </div>
              <p>{image.name}</p>
              <span className="name">{image.price}</span>
            </div>
          </Card>
        </ItemsWrap>
      </ItemsContain>
    );
  });
  const ref = useRef(null);

  return (
    <Wrapper>
      <h1>GOODS</h1>
      <hr />
      <Contain>
        <div className={classes.absolute}>
          <button
            className={classes.prevButton}
            onClick={() => ref?.current?.slidePrev()}
          >
            <BsChevronCompactLeft />
          </button>
          <CarouselBox>
            <AliceCarousel
              responsive={responsive}
              mouseTracking
              infinite={1000}
              animationDuration={1000}
              disableDotsControls
              disableButtonsControls
              autoPlay
              paddingRight={300}
              onChange={onSlideChange}
              ref={ref}
              value={slide}
              items={items}
            />
          </CarouselBox>
          <button
            className={classes.nextButton}
            onClick={() => ref?.current?.slideNext()}
          >
            <BsChevronCompactRight />
          </button>
        </div>
      </Contain>
    </Wrapper>
  );
}

export default GoodsCarousel;
const Wrapper = styled.div`
  h1 {
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    top: 10%;
  }
`;
const Contain = styled.div`
  display: flex;
  height: 50rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .alice-wrapper {
    width: 100%;
  }
  alice-carousel > div {
    width: 427px;
    height: 525px;
  }
  li.alice-carousel__stage-item>*: (.__active) {
    width: 427px;
    height: 525px;
  }
  li.alice-carousel__stage-item > *:not(.__active .__target) {
    width: 427px;
    height: 525px;
  }
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 530px;
  padding: 0 10px;
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 525px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Card = styled.div`
width: 300px;
  height: 350px;
  
  }
  .outter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

  }
  .inner{
    display: flex; /* 추가: 내부 컨테이너를 가로로 배치 */
    align-items: center; /* 추가: 수직 가운데 정렬 */
    
  }
  p {
    display: flex;
    width: 250px;
    height: 20px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
  }
  img {
    width: 250px;
    height: 250px;
    align-items: center;
  }
  .sm {
    width: 48px;
    height: 48px;
    ;
  }
 .name {
    margin-top: 10px;
    
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: left;
    
  }
`;
const CarouselBox = styled.div`
  width: 1200px;
  height: 400px;
  position: relative;
  top: 0;
  left: 0;
`;
