import React, { useRef, useState, useEffect } from "react";
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
      <hr />
      <p>주소 :</p><span>{corporationData.location}</span>
      <p>{corporationData.date}</p>
      <p>기간 :</p><span>{corporationData.term}</span>
    </div>
  );
  return <Wrap>{corporationItems}</Wrap>;
}

export default Corporation;

const Wrap = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    top: 65rem;
    right: 0rem;
  

  hr {
    width: 350px;
    align-items: center;
    margin: 10px 0px 30px 0px;
  }

  h3 {
    display: flex;
    width: 380px;
    height: 60px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #000;
    font-family: Pretendard;
    font-size: 23px;
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
    font-weight: 900;
    line-height: normal;
  }

  span {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;