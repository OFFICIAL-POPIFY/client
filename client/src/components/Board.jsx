import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import styled from "styled-components";

function Board() {
  const storeId = window.location.pathname.split("/")[3];
  const CORPORATION_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${storeId}`;
  const [corporationData, setCorporationData] = useState([]);
  const [corporationContents, setCorporationContents] = useState("");
  useEffect(() => {
    axios
      .get(CORPORATION_URL)
      .then((response) => {
        setCorporationData(response.data);
        setCorporationContents(response.data.contents);
        console.log("resData", response.data.contents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CORPORATION_URL]);

  const corporationItems = (
    <>
      <img src={corporationContents} alt="corporation" />
      {/*<span>{corporationData.contents}</span>*/}
    </>
  );

  console.log("item", corporationItems);
  return <Wrap>{corporationItems}</Wrap>;
}

export default Board;

const Wrap = styled.div`

  position: relative;
  display: flex;
  width: 1200px;
  height: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  left: 50%;
  transform: translate(-57%);
  top: 150%;
  margin-top: -350px;

  z-index: -100;
`;
