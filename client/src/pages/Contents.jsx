import React from "react";

import NewCarousel from "../components/NewCarousel";
import MapContainer from "../components/MapContainer";
import Review from "../components/Review";
function Contents() {
  return (
    <div>
      <NewCarousel />
      <MapContainer />
      <Review />
    </div>
  );
}

export default Contents;
