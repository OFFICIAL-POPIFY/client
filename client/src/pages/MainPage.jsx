import React from "react";
import Cover from "../components/carousel/Cover";
import StoreList2 from "../components/carousel/StoreList2";
import GoodsCarousel from "../components/carousel/GoodsCarousel";
import data from "../components/data.json";
function MainPage() {
  return (
    <div>
      <Cover />
      <GoodsCarousel />
      <StoreList2 />
    </div>
  );
}

export default MainPage;
