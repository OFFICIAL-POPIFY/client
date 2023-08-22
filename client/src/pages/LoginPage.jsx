import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi2";
import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";

const LOGIN_URL = `${process.env.REACT_APP_BASE_URL}/users/login`;

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [succsess, setSuccsess] = useState(false);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, [succsess]);
  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, password }),
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
      setAuth({ user, password, accsessToken, roles });
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
      <h3>LOGIN</h3>
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
                <AiOutlineUser/>
                <input
                  placeholder="아이디"
                  type="text"
                  id="id"
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  ref={userRef}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="password"></label>
                <HiOutlineKey/>
                <input
                  placeholder="비밀번호"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
              <button type="submit" className={classes.login}>
                LOGIN
              </button>
            </form>
            <Link to="/signup">회원가입</Link>
          </section>
        </main>
      ) : (
        <>
          <Link to="/mypage">mypage</Link>
        </>
      )}
    </div>
  );
}

export default Login;
