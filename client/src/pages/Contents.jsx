import React from "react";

import Review from "../components/Review";
import Carousel from "../components/Carousel";
import MapContainer from "../components/MapContainer";
import CommentForm from "../components/CommentForm";

function Contents() {
  return (
    <div>
      <Review />
      <Carousel />
      <MapContainer />
      <CommentForm />
    </div>
  );
}

export default Contents;
