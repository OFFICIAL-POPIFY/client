import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import classes from "./Footer.module.css";
import "../App.css";
import Layout from "../ui/Layout";

function Footer() {
  return (
    <Wrapper>
      <Subscript>
        <div>INFINITE MOMENTS FLOW FROM PLACES THAT ARE NOT FOREVER</div>
        <p className="centered-text">
          영원하지 않은 공간으로부터의 무한한 순간들
        </p>
      </Subscript>
      <Link to="/">
        <img src="/images/logo2.png" alt="logo2" className={classes.logo2} />
      </Link>
      <Link to="https://www.instagram.com/popify.official/">
        <div className="follow">FOLLOW</div>
        <div className="icon">
          <FaInstagram />
        </div>
      </Link>
      <span id="copyright">
        Copyright &copy; ESG Project All rights reserved. Website by. POPIFY
      </span>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100vw;
  height: 31.5625rem;
  display: flex;
  align-items: center;
  line-height: 50rem;
  padding-top: 50px;
  position: relative;
  background: #000;
  flex-direction: column;
  top: 20%;

  .follow {
    position: absolute;
    top: 75%;
    display: flex;
    width: 61px;
    height: 20px;
    flex-direction: column;

    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    left: 49%;
    transform: translateX(-50%);
    justify-content: center;
  }

  .icon {
    position: absolute;
    top: 75%;
    display: flex;
    color: #fff;
    width: 20px;
    height: 20px;
    flex-shrink: 0;

    left: 52%;
    transform: translateX(-50%);
    justify-content: center;
    align-items: center;
  }

  #copyright {
    position: absolute;
    margin-top: 410px;
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

  div {
    margin-top: 30px;
  }

  p {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 25px;

    transform: translateX(47%);
    justify-content: center;
    align-items: center;
  }
`;

const copyright = styled.div`
  color: #959595;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
