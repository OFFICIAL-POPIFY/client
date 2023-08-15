import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";
const SiGNUP_URL = "/users/signup";

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [succsess, setSuccsess] = useState(false);
  const [passwordConfrim, setPasswordConfrim] = useState("");
  const [email, setEmail] = useState("");
  const handleCheckDuplicate = async () => {
    try {
      const response = await axios.post(
        "/users/id/:user_id/exist", // 중복확인을 위한 API 엔드포인트
        JSON.stringify({ user }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.isDuplicate) {
        setErrMsg("이미 사용 중인 아이디입니다.");
      } else {
        setErrMsg("");
        // 사용 가능한 아이디라면 메시지 표시 또는 상태 업데이트 등을 수행할 수 있습니다.
      }
    } catch (err) {
      console.error("중복확인 오류:", err);
    }
  };
  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, [succsess]); // 수행 조건 변경

  useEffect(() => {
    setErrMsg("");
  }, [user, password, passwordConfrim, email]);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        SiGNUP_URL,
        JSON.stringify({ user, password, passwordConfrim, email }),
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
      setAuth({ user, password, passwordConfrim, email, accsessToken, roles });
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
                <label htmlFor="id"></label>
                <input
                  placeholder="아이디"
                  type="text"
                  id="id"
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  ref={userRef} // Ref 객체에 DOM 요소를 참조하도록 설정
                />
                <button onClick={handleCheckDuplicate}>중복확인</button>
              </div>
              <div className={classes.control}>
                <label htmlFor="password"></label>
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
                <input
                  placeholder="비밀번호 확인"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="off"
                  onChange={(e) => setPasswordConfrim(e.target.value)}
                  value={passwordConfrim}
                  required
                />
              </div>
              {/* <div className={classes.control}>
                <label htmlFor="email"></label>
                <input
                  placeholder="이메일"
                  type="email"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div> */}
              <button className={classes.login}>SIGN UP</button>
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

export default Login;
