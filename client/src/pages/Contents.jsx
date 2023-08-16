import React from "react";
import Thumbnail from "../components/carousel/Thumbnail";
import MapContainer from "../components/MapContainer";
import CommentForm from "../components/CommentForm";
import InnerNav from "../components/InnerNav";
import GoodsCarousel2 from "../components/carousel/GoodsCarousel2";
import styled from "styled-components";
function Contents() {
  return (
    <Container>
      <></>

      <div>
        <Thumbnail />
      </div>
      <div>
        <GoodsCarousel2 />
        <InnerNav />
      </div>
      <div>
        <CommentForm />
      </div>
      <MapContainer />
    </Container>
  );
}

export default Contents;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
