import React from "react";
import styled from "styled-components";
import "../App.css";
function Footer() {
  return (
    <Wrapper>
      <Subscript>
        <div>INFINITE MOMENTS FLOW FROM PLACES THAT ARE NOT FOREVER</div>
        <p>영원하지 않은 공간으로부터의 무한한 순간들</p>
      </Subscript>
      <img src="./images/logo2.png" alt="" />
      <span>FOLLOW</span>
      <span>icon</span>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 1920px;
  height: 505px;
  flex-shrink: 0;
  background: #000;
  span {
    display: flex;
    width: 61px;
    height: 20px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const Subscript = styled.div`
  display: flex-end;

  width: 600px;
  height: 75px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  p {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
