import React from "react";
import Cover from "../components/Cover";
import StoreList from "../components/StoreList";
import GoodsCarousel from "../components/GoodsCarousel";
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
