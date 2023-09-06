import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi2";

import classes from "./SignupPage.module.css";
import { Link } from "react-router-dom";
function Signup() {
  // const user_id = "user_id";
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef();
  const [user_id, setUser_id] = useState("");
  const SIGNUP_URL = `${process.env.REACT_APP_BASE_URL}/users/signup`;
  const EXIST_URL = `${process.env.REACT_APP_BASE_URL}/users/id/${user_id}/exist`;
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [succsess, setSuccsess] = useState(false);

  const [passwordConfirm, setPasswordConfirm] = useState(""); // 변수 이름 수정

  const handleCheckDuplicate = async () => {
    try {
      const response = await axios.get(EXIST_URL, JSON.stringify({ user_id }), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.isDuplicate) {
        setErrMsg("아이디가 중복되었습니다.");
      } else {
        setErrMsg("중복확인이 되었습니다.");
      }
    } catch (err) {
      console.error("중복확인 오류:", err);
      setErrMsg("중복확인에 오류가 발생했습니다.");
    }
  };
  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, [succsess]);

  useEffect(() => {
    setErrMsg("");
  }, [user_id, password]);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    try {
      // 비밀번호와 비밀번호 확인이 일치하는지 확인
      if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({ user_id, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken; // 변수 이름 수정
      const roles = response?.data?.roles;
      setAuth({ user_id, password, accessToken, roles });
      setUser_id("");
      setPassword("");
      setPasswordConfirm(""); // 비밀번호 확인 필드 지우기
      setSuccsess(true);

      // 비밀번호가 일치할 때 알림 창 띄우기
      alert("비밀번호가 일치합니다.");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("서버와 연결할 수 없습니다.");
      } else if (err.response.status === 401) {
        setErrMsg("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        setErrMsg("알 수 없는 오류가 발생했습니다.");
      }
    }
  };
  return (
    <div>
      <p className={classes.title}>SIGN UP</p>
      <hr />
      {!succsess ? (
        <main className={classes.auth}>
          <section>
            <form onSubmit={handlerSubmit}>
              <p
                ref={errRef}
                className={errMsg ? classes.errMsg : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className={classes.control}>
                <label htmlFor="id"></label>
                <div className={classes.icon}>
                  <AiOutlineUser size="20" />
                </div>
                <input
                  placeholder="아이디"
                  type="text"
                  user_id="id"
                  autoComplete="off"
                  onChange={(e) => setUser_id(e.target.value)}
                  value={user_id}
                  required
                  ref={userRef}
                />
                {!succsess && (
                  <button
                    type="button"
                    className={classes.duplicateButton}
                    onClick={handleCheckDuplicate}
                  >
                    중복 확인
                  </button>
                )}
              </div>
              <div className={classes.control}>
                <label htmlFor="password"></label>
                <div className={classes.icon}>
                  <HiOutlineKey size="20" />
                </div>
                <input
                  placeholder="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="passwordConfirm"></label>
                <div className={classes.icon}>
                  <HiOutlineKey size="20" />
                </div>
                <input
                  placeholder="비밀번호 확인"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="off"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                  required
                />
              </div>
              <button type="submit" className={classes.signup}>
                SIGN UP
              </button>
            </form>
          </section>
        </main>
      ) : (
        <p>회원가입 성공</p>
      )}
    </div>
  );
}

export default Signup;
