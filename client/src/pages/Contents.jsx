import React from "react";
import Review from "../components/Review";
import NewCarousel from "../components/NewCarousel";
import MapContainer from "../components/MapContainer";
import TopCarousel from "../components/TopCarousel";
import Thumbnail from "../components/Thumbnail";
function Contents() {
  return (
    <div>
      <TopCarousel />
      <Thumbnail />
      <Review />
      <NewCarousel />
      <MapContainer />
    </div>
  );
}

export default Contents;
