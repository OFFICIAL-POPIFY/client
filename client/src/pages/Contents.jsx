import React from "react";

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
    </div>
  );
}

export default Contents;
