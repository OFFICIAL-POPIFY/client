import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import styled from "styled-components";
function Corporation() {
  const storeId = window.location.pathname.split("/")[3];
  const CORPORATION_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${storeId}`;
  const [corporationData, setCorporationData] = useState([]);

  useEffect(() => {
    axios
      .get(CORPORATION_URL)
      .then((response) => {
        setCorporationData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CORPORATION_URL]);

  const corporationItems = (
    <div className="card">
      <h2>팝업스토어 정보</h2>
      <hr />
      <h3>{corporationData.corporation}</h3>
      <p>{corporationData.location}</p>
      <p>{corporationData.date}</p>
      <p>{corporationData.time}</p>
    </div>
  );
  return <Wrap>{corporationItems}</Wrap>;
}

export default Corporation;

const Wrap = styled.div`
  position: absolute;
  float: left;
  top: 300px;
  right: 250px
  display: flex;
  width: 500px;
`;
