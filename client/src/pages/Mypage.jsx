import React, { useState } from "react";
import Profile from "../components/Profile";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import PasswordChange from "../components/PasswordChange";
import MyReview from "../components/MyReview";
function Mypage() {
  const [success, setSuccess] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <div>
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
`;

export default Mypage;
