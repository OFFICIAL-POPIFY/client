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
  console.log(corporationData);
  
  const corporationItems = (
    <div className="card">
      <a href={corporationData.placeurl}>
        <h3>{corporationData.corporation}</h3>
      </a>
      <span className="bold">주소 :</span><span>{corporationData.location}</span>
      <span className="bold">기간 :</span><span>{corporationData.term}</span>
      {/*<p>{corporationData.date}</p>*/}
      <span className="bold">예약 여부 :</span><span>{corporationData.reservation}</span>
      <p>{corporationData.tags}</p>
    </div>
  );
  return <Wrap>{corporationItems}</Wrap>;
}

export default Corporation;

const Wrap = styled.div`

  position: relative;
  top: -245px;
  right: -50rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  width: 23.75rem;
  height: 23.75rem;

  z-index: 1;

  h3 {
    display: flex;
    width: 380px;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 30px; /* 150% */
  }

  a {
    display: flex;
    width: 380px;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: 30px; /* 150% */
    text-decoration-line: none;
  }

  p {
    display: flex;
    width: 380px;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 20px 0px 0px 0px;
  }

  .bold {
    display: flex;
    width: 380px;
    height: 45px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin: 0px 0px;
  }

  span {
    color: #000;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }
`;