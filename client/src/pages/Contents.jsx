import React from "react";
import Review from "../components/Review";
import Carousel from "../components/Carousel";
import MapContainer from "../components/MapContainer";
import TopCarousel from "../components/TopCarousel";
function Contents() {
  return (
    <div>
      <TopCarousel />
      <Review />
      <Carousel />
      <MapContainer />
    </div>
  );
}

export default Contents;
