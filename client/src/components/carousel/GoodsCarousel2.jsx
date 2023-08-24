import React, { useState, useRef, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import classes from "./GoodsCarousel2.module.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
function GoodsCarousel() {
  const GOODS_URL = `${process.env.REACT_APP_BASE_URL}/goods`;
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
            <FaChevronLeft size="30" />
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
            <FaChevronRight size="30" />
          </button>
        </div>
      </Contain>
    </Wrapper>
  );
}

export default GoodsCarousel;

const Wrapper = styled.div`
  hr {
    width: 1198px;
    align-items: center;
    margin: 0;
  }

  h1 {
    width: 92px;
    height: 30px;
    color: #000;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
`;

const Contain = styled.div`
  display: flex;
  height: 760px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .alice-wrapper {
    width: 100%;
  }

  alice-carousel > div {
    width: 300px;
    height: 350px;
  }

  li.alice-carousel__stage-item>*: (.__active) {
    width: 300px;
    height: 350px;
  }

  li.alice-carousel__stage-item > *:not(.__active .__target) {
    width: 300px;
    height: 350px;
  }
`;

const ItemsContain = styled.div`
  width: 100%;
  height: 530px;
  padding: 0px;
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

  .outter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inner {
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
    margin: 10px 0px 5px;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  img {
    width: 260px;
    height: 260px;
    align-items: center;
  }

  .name {
    display: flex;
    width: 250px;
    height: 20px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const CarouselBox = styled.div`
  width: 1200px;
  height: 715px;
  position: relative;
  top: 0;
  left: 0;
`;
