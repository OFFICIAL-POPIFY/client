import React, { useState } from "react";
import Profile from "../components/Profile";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import PasswordChange from "../components/PasswordChange";

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
            <>
              <Profile />
              <PasswordChange />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

const Styledform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export default Mypage;
