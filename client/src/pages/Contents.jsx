import React from "react";
import Thumbnail from "../components/Thumbnail";
import NewCarousel from "../components/NewCarousel";
import MapContainer from "../components/MapContainer";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
function Contents() {
  return (
    <Container>
      <Thumbnail />
      {/* <NewCarousel /> */}
      <CommentForm />
      <MapContainer />
    </Container>
  );
}

export default Contents;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
