import React from "react";
import Review from "../components/Review";
import NewCarousel from "../components/NewCarousel";
import MapContainer from "../components/MapContainer";
import TopCarousel from "../components/TopCarousel";
function Contents() {
  return (
    <div>
      <TopCarousel />
      <Review />
      <NewCarousel />
      <MapContainer />
    </div>
  );
}

export default Contents;
