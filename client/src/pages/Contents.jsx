import React from "react";
import Thumbnail from "../components/Thumbnail";
import NewCarousel from "../components/NewCarousel";
import MapContainer from "../components/MapContainer";
import CommentForm from "../components/CommentForm";

function Contents() {
  return (
    <div>
      <Thumbnail />
      <NewCarousel />
      <MapContainer />
      <CommentForm />
    </div>
  );
}

export default Contents;