import React from "react";
import Thumbnail from "../components/carousel/Thumbnail";
import MapContainer from "../components/MapContainer";
import CommentForm from "../components/CommentForm";

import GoodsCarousel2 from "../components/carousel/GoodsCarousel2";
import styled from "styled-components";
import Corporation from "../components/Corporation";
function StoreContainer() {
  return (
    <div>
      <div>
        <Thumbnail />
      </div>
      <div>
        <GoodsCarousel2 />
      </div>
      <div>
        <Corporation />
      </div>
      <div>
        <CommentForm />
      </div>
      <MapContainer />
    </div>
  );
}

export default StoreContainer;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
