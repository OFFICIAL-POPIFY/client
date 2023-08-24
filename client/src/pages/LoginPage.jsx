import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";

import axios from "../api/axios";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi2";
import { TiDelete } from "react-icons/ti";
import classes from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LOGIN_URL = `${process.env.REACT_APP_BASE_URL}/users/login`;

function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef();

  const [user_id, setUser_id] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [succsess, setSuccsess] = useState(false);

  const navigate = useNavigate();

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
        LOGIN_URL,
        JSON.stringify({ user_id, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const accsessToken = response?.data?.token?.access_token;
      localStorage.setItem("accessToken", accsessToken);
      const roles = response?.data?.roles;
      setAuth({
        user_id,
        password,
        accsessToken,
        roles,
        id: response?.data?.user?._id,
      });
      setSuccsess(true);
      navigate("/");
      alert("로그인 되었습니다.");
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
     <p className={classes.title}>LOGIN</p>
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
                <AiOutlineUser />
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
                <div className={classes.icon2}>
                <TiDelete />
                </div>
              </div>
              <div className={classes.control}>
                <label htmlFor="password"></label>
                <div className={classes.icon}>
                <HiOutlineKey />
                </div>
                <input
                  placeholder="비밀번호"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <div className={classes.icon2}>
                  <TiDelete />
                </div>
              </div>
              <button type="submit" className={classes.login}>      
              LOGIN
              </button>
            </form>
          </section>
        </main>
      ) : (
        <>
        </>
      )}
            <div className={classes.linktos}>
            <Link to="/signup">회원가입</Link>
            </div>
    </div>
  );
}

export default Login;
