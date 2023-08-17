import React from "react";
import styled from "styled-components";

function InnerNav() {
  return (
    <Wrapper>
      <ul>
        <li>
          <div>INFORMATION</div>
        </li>
        <li>
          <div>INTRODUCTION</div>
        </li>
        <li>
          <div>REVIEW</div>
        </li>
        <li>
          <div>MAP</div>
        </li>
      </ul>
    </Wrapper>
  );
}

export default InnerNav;

const Wrapper = styled.div`
  width: 1200px;
  height: 80px;
  flex-shrink: 0;
  border: 0.5px solid #959595;
  background: #fff;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }

  li > div {
    z-index: 9;
    width: 230px;
    height: 50px;
    border-radius: 10px;
    flex-shrink: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
`;
