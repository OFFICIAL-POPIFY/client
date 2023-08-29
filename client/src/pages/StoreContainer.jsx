import React from "react";
import Thumbnail from "../components/carousel/Thumbnail";
import MapContainer from "../components/MapContainer";
import CommentForm from "../components/CommentForm";
import Corporation from "../components/Corporation";
import GoodsCarousel2 from "../components/carousel/GoodsCarousel2";
import styled from "styled-components";

function StoreContainer() {
  return (
    <div>
      <Div>
        <div>
          <Thumbnail />
        </div>
        <div>
          <Corporation />
        </div>
      </Div>

      <div>
        <GoodsCarousel2 />
      </div>
      <div>
        <CommentForm />
      </div>
      <MapContainer />
    </div>
  );
}

export default StoreContainer;

const Div = styled.div`
  display: flex;
  width: 1200px;
`;
