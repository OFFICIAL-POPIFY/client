import React, { useRef, useState, useContext } from "react";
import Profile from "../components/Profile";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import styled from "styled-components";

function Mypage() {
  const { setAuth, value } = useContext(AuthContext);
  const [passwordConfrim, setPasswordConfrim] = useState("");
  const [success, setSuccess] = useState(false);
  const { userPassword } = value;
  const changeRef = useRef();
  console.log("확인");
  const token = localStorage.getItem("token");

  // 조건문 밖에서 함수 정의
  const handleCheckPassword = (e) => {
    e.preventDefault();
    if (passwordConfrim === userPassword) {
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

  // 조건문 내에서 JSX 렌더링 결정
  return (
    <div>
      {token ? (
        <Navigate to="/login" />
      ) : (
        <>
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
