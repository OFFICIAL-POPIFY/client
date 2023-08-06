import React from "react";

import Review from "../components/Review";
import NewCarousel from "../components/NewCarousel";
import MapContainer from "../components/MapContainer";
function Contents() {
  return (
    <div>
      <Review />
      <NewCarousel />
      <MapContainer />
    </div>
  );
}

export default Contents;
