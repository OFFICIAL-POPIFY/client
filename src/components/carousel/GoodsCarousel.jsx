import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
function GoodsCarousel() {
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
      icon: "./images/goods/brandIcon1.png",
      name: "빵빵이 팝업스토어",
      img: "./images/goods/goods1.png",
      goodsName: "빵빵이 인형",
    },
    {
      icon: "./images/goods/brandIcon2.png",
      name: "흰디 팝업스토어",
      img: "./images/goods/goods2.png",
      goodsName: "인형,피규어,무드등,가방 등",
    },
    {
      icon: "./images/goods/brandIcon3.png",
      name: "카카오프렌즈 팝업스토어",
      img: "./images/goods/goods3.png",
      goodsName: "앙몬드 & 스카피 굿즈",
    },
    {
      icon: "./images/goods/brandIcon4.png",
      name: "다나카 프렌즈 팝업스토어",
      img: "./images/goods/goods4.png",
      goodsName: "폰케이스,그립톡,키링 등",
    },
  ];
  const items = images.map((image) => {
    return (
      <ItemsContain>
        <ItemsWrap>
          <Card>
            <div className="outter">
              <div className="inner">
                <img className="sm" src={image.icon} alt="" />
                <p>{image.name}</p>
              </div>
              <div>
                <img src={image.img} alt="" />
              </div>
              <span className="name">{image.goodsName}</span>
            </div>
          </Card>
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

export default GoodsCarousel;

const Contain = styled.div`
  display: flex;
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
  border-bottom: 2px solid #000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Card = styled.div`
width: 427px;
  height: 525px;
  border: 2px solid #000;

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
    width: 305px;
    height: 48px;
    flex-direction: column;
    justify-content: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 10px;
  }
  img {
    width: 363px;
    height: 353px;
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