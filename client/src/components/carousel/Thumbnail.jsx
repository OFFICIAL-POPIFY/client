import React, { useRef } from "react";
import AliceCarousel, { slidePrev } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { useState } from "react";
import classes from "./Thumbnail.module.css";
import Corporation from "../Corporation";
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
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F47E49C69BC6F44F2B12EB84CF56471AA",
      text: "포르쉐 나우 성수",
      link: "https://place.map.kakao.com/1409154620",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F23B7F6778DF24338A60A959F49A7C117",
      text: "카스 레몬스퀴즈 팝업스토어",
      link: "https://place.map.kakao.com/1496327178",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FD2502AAEB7B24861B813B3515FB9C198",
      text: "메종프란시스커정 팝업스토어 갤러리아 타임월드점",
      link: "https://place.map.kakao.com/149300544",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F05C70613570148958BF42507BA77BAF4",
      text: "스펙타클타운",
      link: "https://place.map.kakao.com/351722316",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FFFA62748275A49B28C48287C7326D403",
      text: "메타그라운드 성수점",
      link: "https://place.map.kakao.com/98681541",
    },
    {
      img: "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2F2875A7FD61F84B22B7E44AF1D5468AF8",
      text: "그랜드부다페스트 홍대",
      link: "https://place.map.kakao.com/347988278",
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
        <div>
          <Corporation />
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
              <BsChevronCompactLeft />
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
              <BsChevronCompactRight />
            </button>
          </div>
        </Contain>
      </div>

      <div></div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: space-between;
`;
const Contain = styled.div`
  width: 50rem;
  height: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const CarouselBox = styled.div`
  width: 700px;
  height: 600px;
  position: relative;
  top: 0;
  left: 0;
`;

const ItemsContain = styled.div`
  flex-direction: column;
  width: fit-content;
  height: 400px;
  display: flex;
  padding: 0 10px;
  div {
    margin: 0 40px;
  }
`;

const ItemsWrap = styled.div`
  img {
    width: 40rem;
    height: 30rem;
  }
  display: flex;
  width: fit-content;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 20px;
`;

export default Thumbnail;
