import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthProvider";
import styled from "styled-components";
import { Link } from "react-router-dom";
import classes from "./InnerNav.module.css";

function InnerNav() {
  // const id = window.location.pathname.split("/")[3];
  const { setAuth, value } = useContext(AuthContext);

  const id = value?.auth?.id;
  console.log("id:", id);
  const mapHandler = () => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    window.scrollTo({ top: documentHeight, behavior: "smooth" });
  };

  return (
    <Wrapper className={classes.wrapper}>
      <ul>
        <li>
          <div>
            <Link to="/">INFORMATION</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/about">INTRODUCTION</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to={`/review/${id}`}>REVIEW</Link>
          </div>
        </li>
        <li>
          <div>
            <div onClick={mapHandler}>MAP</div>
          </div>
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
  top:-390px;
  position: relative;
  
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

  li > div > a:visited {
    color: white;
  }
`;
