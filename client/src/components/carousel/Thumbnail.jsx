import React, { useRef, useState, useEffect } from "react";
import AliceCarousel, { slidePrev } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

import classes from "./Thumbnail.module.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import axios from "../../api/axios";
function Thumbnail() {
  const storeId = window.location.pathname.split("/")[3];
  const CORPORATION_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${storeId}`;
  const [corporationData, setCorporationData] = useState([]);
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
  useEffect(() => {
    axios
      .get(CORPORATION_URL)
      .then((response) => {
        console.log("API 응답:", response.data);
        setCorporationData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const popupImages = corporationData.popup_imgs || []; // 기본값으로 빈 배열 사용
  const items = popupImages.map((image, index) => {
    return (
      <ItemsContain key={index}>
        <ItemsWrap>
          <img src={image} alt="" />
        </ItemsWrap>
        <div>{/* 다른 정보 표시 */}</div>
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
  width: 49.375rem;
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