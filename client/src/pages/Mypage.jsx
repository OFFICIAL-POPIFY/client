import React, { useRef, useState, useEffect, useContext } from "react";
import Profile from "../components/Profile";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import styled from "styled-components";

function Mypage() {
  const { setAuth, value } = useContext(AuthContext);
  const [passwordConfrim, setPasswordConfrim] = useState("");
  const [success, setSuccess] = useState(false);
  const { userPassord } = value;
  const changeRef = useRef();
  console.log("확인");
  const handleCheckPassword = (e) => {
    e.preventDefault();
    if (passwordConfrim === userPassord) {
      setSuccess(true);
      console.log("비밀번호 일치");
    } else {
      console.error("비밀번호가 일치하지 않습니다.");
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "/users/profile",
        JSON.stringify({ passwordConfrim }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess(true);
      const roles = response?.data?.roles;
      setAuth({ passwordConfrim, roles });
    } catch (err) {
      console.error("비밀번호 변경 오류:", err);
    }
  };

  return (
    <div>
      {!success ? (
        <>
          <Profile />
          <Styledform onSubmit={formSubmit}>
            <label htmlFor="change">비밀번호 변경</label>
            <input
              ref={changeRef}
              value={passwordConfrim}
              type="password"
              placeholder="비밀번호 변경"
              onChange={(e) => setPasswordConfrim(e.target.value)}
            />
            <button onClick={handleCheckPassword}>변경</button>
          </Styledform>
        </>
      ) : (
        ""
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
