import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import classes from "./Footer.module.css";
import "../App.css";
import Layout from "../ui/Layout";

function Footer() {
  return (
    <Wrapper>
      <Subscript>
        <div>INFINITE MOMENTS FLOW FROM PLACES THAT ARE NOT FOREVER</div>
        <p>영원하지 않은 공간으로부터의 무한한 순간들</p>
      </Subscript>
      <Link to="/">
        <img src="/images/logo2.png" alt="logo2" className={classes.logo2} />
      </Link>
      <div className="div1">FOLLOW</div>
      <Link to="https://www.instagram.com/popify.official/">
        <div className="div2">
          <BsInstagram />
        </div>
      </Link>
      <span id="copy">
        Copyright &copy; ESG Project All rights reserved. Website by. POPIFY
      </span>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 505px;
  display: flex;
  align-items: center;
  line-height: 50rem;
  padding-top: 50px;
  position: relative;
  background: #000;
  flex-direction: column;

  .div1 {
    position: absolute;
    top: 54%;
    display: flex;
    width: 61px;
    height: 20px;
    flex-direction: column;

    flex-shrink: 0;
    color: #fff;
    padding-right: 4rem;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .div2 {
    position: absolute;
    top: 54%;
    padding-left: 2rem;
    display: flex;
    color: #fff;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  img {
    margin-top: 50px;
    width: 350px;
    height: 120px;
  }

  #copy {
    position: absolute;
    top: 70%;
    display: flex;
    width: 100%;
    height: 20px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #959595;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
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

const copy = styled.div`
  color: #959595;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
