import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";
const SIGNUP_URL = `${process.env.REACT_APP_BASE_URL}/users/signup`;
const EXIST_URL = `${process.env.REACT_APP_BASE_URL}/users/id/:user_id/exist`;
function Signup() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef();
  const [user_id, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [succsess, setSuccsess] = useState(false);
  // const [passwordConfrim, setPasswordConfrim] = useState("");
  // const [email, setEmail] = useState("");
  const handleCheckDuplicate = async () => {
    try {
      const response = await axios.get(EXIST_URL, JSON.stringify({ user_id }), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.isDuplicate) {
        setErrMsg("이미 사용 중인 아이디입니다.");
      } else {
        setErrMsg("");
      }
    } catch (err) {
      console.error("중복확인 오류:", err);
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
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({ user_id, password }),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );
      console.log(JSON.stringify(response?.data));
      const accsessToken = response?.data?.accsessToken;
      const roles = response?.data?.roles;
      setAuth({ user_id, password, accsessToken, roles });
      setUser("");
      setPassword("");
      setSuccsess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("서버와 연결할 수 없습니다.");
      } else if (err.response.status === 401) {
        setErrMsg("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        setErrMsg("알 수 없는 오류가 발생했습니다.");
      }
      errRef.current.focus();
    }
  };

  return (
    <div>
      LoginPage
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
                <label className={classes.labelContainer} htmlFor="id"></label>
                <div className={classes.inputContainer}>
                  <input
                    placeholder="아이디"
                    type="text"
                    user_id="id"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user_id}
                    required
                    ref={userRef}
                  />
                  {!succsess && (
                    <button
                      type="submit"
                      className={classes.duplicateButton}
                      onClick={handleCheckDuplicate}
                    >
                      중복확인
                    </button>
                  )}
                </div>
              </div>
              <div className={classes.control}>
                <label htmlFor="password">
                  <input
                    placeholder="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </label>
              </div>
              {/* <div className={classes.control}>
                <label htmlFor="passwordConfirm"></label>
                <input
                  placeholder="비밀번호 확인"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="off"
                  onChange={(e) => setPasswordConfrim(e.target.value)}
                  value={passwordConfrim}
                  required
                ></input>
              </div> */}
              <button type="submit" className={classes.login}>
                SIGN UP
              </button>
            </form>
            <Link to="/login">로그인</Link>
          </section>
        </main>
      ) : (
        <p>로그인 성공</p>
      )}
    </div>
  );
}

export default Signup;
