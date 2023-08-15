import React from "react";
import styled from "styled-components";
function StoreList({ data }) {
  const storeItems = data.map((store, index) => (
    <div key={index} className="post">
      <img src={store.placeurl} alt="" />
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
    flex-direction: column;
    justify-content: space-between;
  }
  .post {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 1rem;
    padding: 10px;
    border-radius: 2px;
    outline: none;

    border-radius: 5px;
    border: 1.5px solid #a19f9f;
    background-color: white;
    font-size: large;
  }
`;
