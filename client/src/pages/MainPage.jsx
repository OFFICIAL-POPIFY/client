import React from "react";
import Cover from "../components/carousel/Cover";
import StoreList from "../components/carousel/StoreList";
import GoodsCarousel from "../components/carousel/GoodsCarousel";
import data from "../components/data.json";
function MainPage() {
  return (
    <div>
      <Cover />
      <GoodsCarousel />
      <StoreList data={data} />
    </div>
  );
}

export default MainPage;
