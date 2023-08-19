import React, { useRef, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import styled from "styled-components";

function PasswordChange() {
  const { setAuth, value } = useContext(AuthContext);
  const [passwordConfrim, setPasswordConfrim] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const { userPassword } = value;
  const changeRef = useRef();
  const newRef = useRef();

  const handleCheckPassword = (e) => {
    e.preventDefault();
    if (!passwordConfrim === "" && passwordConfrim === userPassword) {
      alert("비밀번호가 일치합니다.");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
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
      const roles = response?.data?.roles;
      setAuth({ passwordConfrim, roles });
    } catch (err) {
      console.error("비밀번호 변경 오류:", err);
    }
  };

  return (
    <Wrap>
      <h1>기본 정보</h1>
      <Container className="grid">
        <Styledform onSubmit={formSubmit}>
          <Top>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30 5C16.1925 5 5 16.1925 5 30C5 43.8075 16.1925 55 30 55C43.8075 55 55 43.8075 55 30C55 16.1925 43.8075 5 30 5ZM21.25 23.75C21.25 22.6009 21.4763 21.4631 21.9161 20.4015C22.3558 19.3399 23.0003 18.3753 23.8128 17.5628C24.6253 16.7503 25.5899 16.1058 26.6515 15.6661C27.7131 15.2263 28.8509 15 30 15C31.1491 15 32.2869 15.2263 33.3485 15.6661C34.4101 16.1058 35.3747 16.7503 36.1872 17.5628C36.9997 18.3753 37.6442 19.3399 38.0839 20.4015C38.5237 21.4631 38.75 22.6009 38.75 23.75C38.75 26.0706 37.8281 28.2962 36.1872 29.9372C34.5462 31.5781 32.3206 32.5 30 32.5C27.6794 32.5 25.4538 31.5781 23.8128 29.9372C22.1719 28.2962 21.25 26.0706 21.25 23.75ZM45.645 42.46C43.7736 44.8141 41.3945 46.7149 38.6854 48.0205C35.9763 49.3261 33.0073 50.0028 30 50C26.9927 50.0028 24.0237 49.3261 21.3146 48.0205C18.6055 46.7149 16.2264 44.8141 14.355 42.46C18.4075 39.5525 23.9375 37.5 30 37.5C36.0625 37.5 41.5925 39.5525 45.645 42.46Z"
                fill="#959595"
              />
            </svg>

            <span>{value.userName}</span>
          </Top>
          <label htmlFor="change"></label>
          <input
            id="1"
            ref={changeRef}
            value={passwordConfrim}
            type="password"
            placeholder="현재 비밀번호"
            onChange={(e) => setPasswordConfrim(e.target.value)}
          />
          <label htmlFor="newPassword"></label>
          <input
            id="2"
            ref={newRef}
            value={newPassword}
            type="password"
            placeholder="새 비밀번호"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            id="3"
            ref={newRef}
            value={newPasswordConfirm}
            type="password"
            placeholder="새 비밀번호 확인"
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
          />
          <button className="submit" onClick={handleCheckPassword}>
            변경
          </button>
        </Styledform>
      </Container>
    </Wrap>
  );
}
const Wrap = styled.div`
  h1 {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const Container = styled.div`
  .grid {
    display: grid;
    grid-template-columns: max-content max-content 1fr;
    background: #f7f7f7;
    gap: 10px;
  }
  .grid > * {
    background: white;
  }
`;
const Top = styled.div`
  width: 28rem;
  height: 3.5rem;
`;
const Styledform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37rem;
  padding-bottom: 1rem;
  border: 1px solid #e5e5e5;
  margin-top: 20px;
  button {
    width: 5rem;
    height: 2rem;
  }
  input {
    width: 28rem;
    border: none;
    height: 3.5rem;
    border-bottom: 1px solid #e5e5e5;
  }
  .submit {
    position: absolute;
    right: 70rem;
    top: 35rem;
    padding-right: 10px;
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 5rem;
  }
  .submit:hover {
    background-color: #000000;
  }
`;
export default PasswordChange;
