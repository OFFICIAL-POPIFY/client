import React from "react";

import NewCarousel from "../components/NewCarousel";
import Thumbnail from "../components/Thumbnail";
import MapContainer from "../components/MapContainer";
function Contents() {
  return (
    <div>
      <Thumbnail />
      <NewCarousel />
      <MapContainer />
    </div>
  );
}

export default Contents;

