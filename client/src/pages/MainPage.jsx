import React from "react";
// import Cover from "../components/carousel/Cover";
import StoreList2 from "../components/carousel/StoreList2";
import GoodsCarousel from "../components/carousel/GoodsCarousel";
import data from "../components/data.json";
// import Cover3 from "../components/carousel/Cover3"; 
import Carousel from "../components/carousel/Carousel";
function MainPage() {
  return (
    <div>
      {/* <Cover /> */}
      <Carousel />
      <GoodsCarousel />
      <StoreList2 />
    </div>
  );
}

export default MainPage;
