import React from "react";
import styled from "styled-components";
const imgaes = [
  "./images/thumb/thumbnail1.png",
  "./images/thumb/thumbnail2.png",
  "./images/thumb/thumbnail3.png",
  "./images/thumb/thumbnail4.png",
  "./images/thumb/thumbnail5.png",
  "./images/thumb/thumbnail6.png",
  "./images/thumb/thumbnail7.png",
  "./images/thumb/thumbnail8.png",
  "./images/thumb/thumbnail9.png",
];
function StoreList({ data }) {
  const storeItems = data.map((store, index) => (
    <div className="card">
      <img src={imgaes[index]} alt="" />
      <p>{store.corporation}</p>
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
