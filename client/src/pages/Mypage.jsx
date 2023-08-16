import React, { useRef, useState, useEffect, useContext } from "react";
import Profile from "../components/Profile";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import styled from "styled-components";
function Mypage({ password }) {
  const { setAuth } = useContext(AuthContext);
  const [passwordConfrim, setPasswordConfrim] = useState("");
  const [succsess, setSuccsess] = useState(false);

  const changeRef = useRef();
  const handleCheckPassword = async (e) => {
    e.preventDefault();
    if (passwordConfrim === password) {
      // userPassword는 현재 로그인된 사용자의 비밀번호일 것으로 가정합니다.
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
        setSuccsess(true);
      } catch (err) {
        console.error("비밀번호 변경 오류:", err);
      }
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
      setSuccsess(true);
    } catch (err) {
      console.error("비밀번호 변경 오류:", err);
    }
  };

  useEffect(() => {}, [passwordConfrim]);
  return (
    <div>
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
    </div>
  );
}

export default Mypage;

const Styledform = styled.form``;
