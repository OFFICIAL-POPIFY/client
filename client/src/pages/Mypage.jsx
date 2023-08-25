import React, { useState } from "react";
import Profile from "../components/Profile";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import PasswordChange from "../components/PasswordChange";
import MyReview from "../components/MyReview";
import Resignation from "./Resignation";
import classes from "./Mypage.module.css";
function Mypage() {
  const [success, setSuccess] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <div>
      <p className={classes.title}>MY PAGE</p>
      <hr />
      {token ? (
        <Navigate to="/login" />
      ) : (
        <>
          {!success ? (
            <Wrap>
              <div className="passwordChange">
                <Profile />
                <PasswordChange />
              </div>
              <div className="myReview">
                <MyReview />
              </div>
              <div>
                <Resignation />
              </div>
            </Wrap>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Mypage;
