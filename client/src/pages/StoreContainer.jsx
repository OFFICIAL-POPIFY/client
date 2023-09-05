import Thumbnail from "../components/carousel/Thumbnail";
import MapContainer from "../components/MapContainer";
import CommentForm from "../components/CommentForm";
import Corporation from "../components/Corporation";
import GoodsCarousel2 from "../components/carousel/GoodsCarousel2";
import InnerNav2 from "../components/InnerNav2";
import Board from "../components/Board";
import styled from "styled-components";

function StoreContainer() {
  return (
    <div>
      <div>
        <Thumbnail />
      </div>

      <div>
        <Corporation />
      </div>

      <div>
        <GoodsCarousel2 />
      </div>

      <div>
        <InnerNav2 />
      </div>

      <div>
        <Board />
      </div>

      <div>
        <CommentForm />
      </div>

      <div>
        <MapContainer />
      </div>
    </div>
  );
}

export default StoreContainer;

const Div = styled.div`
  display: flex;
  width: 1200px;
`;
