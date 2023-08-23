import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "../../api/axios";

function StoreList() {
  const STORE_URL = `${process.env.REACT_APP_BASE_URL}/popups`;
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    axios
      .get(STORE_URL)
      .then((response) => {
        console.log(response.data);
        setStoreData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const storeItems = storeData.map((store, index) => (
    <div key={index} className="card">
      <img src={store.popup_imgs[index]} alt="" />
      <Link to={`/popups/search/:${store._id}`}>
        <h3>{store.corporation}</h3>
      </Link>
      <p>{store.location}</p>
    </div>
  ));

  const dividedStoreItems = [];
  for (let i = 0; i < storeItems.length; i += 3) {
    dividedStoreItems.push(storeItems.slice(i, i + 3));
  }
  return (
    <Wrapper>
      <h1>POP-UP STORE</h1>
      <hr />
      {dividedStoreItems.map((group, index) => (
        <section key={index}>{group}</section>
      ))}
    </Wrapper>
  );
}

export default StoreList;

const Wrapper = styled.div`
  display: inline-block;
  a:link {
    color: black;
  }
  a:visited {
    color: #000;
  }

  height: 10rem;
  h1 {
    font-size: 25px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }
  .wrapper {
    flex-grow: 1;
  }
  section {
    display: flex;
    justify-content: space-between;
    margin-top: 20px; /* 각 그룹 사이의 간격 조절 */
  }
  .post {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 10px;
    border-radius: 5px;
    border: 1.5px solid #a19f9f;
    background-color: white;
    font-size: large;
  }
  img {
    width: 400px; /* 이미지 크기 조절 */
    height: 400px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  .card {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
  }
`;
