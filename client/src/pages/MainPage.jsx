import React from "react";
import Cover from "../components/carousel/Cover";
import StoreList2 from "../components/carousel/StoreList2";
import GoodsCarousel2 from "../components/carousel/GoodsCarousel2";
import data from "../components/data.json";
function MainPage() {
  return (
    <div>
      <Cover />
      <GoodsCarousel2 />
      <StoreList2 />
    </div>
  );
}

export default MainPage;
