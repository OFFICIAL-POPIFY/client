import React from "react";
import classes from "./InnerNav.module.css";
import styled from "styled-components";


function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToTop2 = () => {
    window.scrollTo({ top: 700, behavior: "smooth" });
  };
  const scrollToTop3 = () => {
    window.scrollTo({ top: 1100, behavior: "smooth" });
  };
  const scrollToTop4 = () => {
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

return (
    <Wrapper className={classes.wrapper}>
      <ul>
        <li>
          <div>
            <button onClick={scrollToTop}>INFORMATION</button>
          </div>
        </li>
        <li>
          <div>
          <button onClick={scrollToTop2}>INTRODUCTION</button>
          </div>
        </li>
        <li>
          <div>
          <button onClick={scrollToTop3}>REVIEW</button>
          </div>
        </li>
        <li>
          <div>
          <button onClick={scrollToTop4}>MAP</button>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
}

export default ScrollToTopButton;

const Wrapper = styled.div`
  width: 1200px;
  height: 80px;
  flex-shrink: 0;
  border: 0.5px solid #959595;
  background: #fff;
  margin: 0 auto;
  top:-390px;
  position: relative;
  transform: translateX(-3.5%);
  
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