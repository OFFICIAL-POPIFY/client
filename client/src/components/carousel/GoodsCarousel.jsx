import React, { useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
import axios from "../../api/axios";

function GoodsCarousel() {
  const GOODS_URL = `${process.env.REACT_APP_BASE_URL}/goods`;
  const [goodsData, setGoodsData] = useState([]);
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
  };

  const images = goodsData.map((goods) => {
    return {
      img: goods.goods_img,
      icon: goods.popup.popup_imgs[0],
      name: goods.popup.corporation,
      goodsName: goods.goods_name,
    };
  });

  useEffect(() => {
    axios
      .get(GOODS_URL)
      .then((response) => {
        setGoodsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const items = images.map((image) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <Card>
            <div className="outter">
              <div className="inner">
                <img src={image.icon} alt="" />
                <p>{image.name}</p>
              </div>
              <div className="inner">
                <img src={image.img} alt="" />
              </div>
              <span>{image.goodsName}</span>
            </div>
          </Card>
        </ItemsWrap>
      </ItemsContain>
    );
  });

  return (
    <Wrap>
      <h1>GOODS</h1>
      <hr />
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
          paddingRight={20}
        />
      </Contain>
    </Wrap>
  );
}

export default GoodsCarousel;
const Wrap = styled.div`

margin-bottom: 150px;
margin-top: 190px;

hr {
  width: 1280px;
  margin-top: 10px;
  border: none;
  border-top: 1px solid #ccc;
}

  h1 {
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
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  .alice-wrapper {
    width: 100%;
  }
  alice-carousel > div {
    width: 400px;
    height: 400px;
  }
  li.alice-carousel__stage-item > *:not(.__active .__target) {
    width: 400px;
    height: 400px;
  }
`;
const ItemsContain = styled.div`
  width: 400px;
  height: 400px;
  padding: 0px 10px;
`;

const ItemsWrap = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin: 0 20px;
  border-bottom: 1px solid #000;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid #000;
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
    margin-top: 1rem;
  }
  .bm{
    martin-top: 2rem;
  }
 
  img {
    width: 400px;
    height: 400px;
    align-items: center;
  }
`;
