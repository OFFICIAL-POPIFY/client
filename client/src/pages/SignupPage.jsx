import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineKey } from "react-icons/hi2";

import classes from "./SignupPage.module.css";
import { Link } from "react-router-dom";
const user_id = "user_id";
const SIGNUP_URL = `${process.env.REACT_APP_BASE_URL}/users/signup`;
const EXIST_URL = `${process.env.REACT_APP_BASE_URL}/users/id/${user_id}/exist`;
function Signup() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef(null);
  const errRef = useRef();
  const [user_id, setUser_id] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [succsess, setSuccsess] = useState(false);
  const [passwordConfrim, setPasswordConfrim] = useState("");

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
          },
        }
      );
      console.log(JSON.stringify(response?.data));
      const accsessToken = response?.data?.accsessToken;
      const roles = response?.data?.roles;
      setAuth({ user_id, password, accsessToken, roles });
      setUser_id("");
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
      <p className={classes.title}>SIGN UP</p>
     <hr />
      {!succsess ? (
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
                <HiOutlineKey />
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
              { <div className={classes.control}>
                <label htmlFor="passwordConfirm"></label>
                <div className={classes.icon}>
                <HiOutlineKey />
                </div>
                <input
                  placeholder="비밀번호 확인"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="off"
                  onChange={(e) => setPasswordConfrim(e.target.value)}
                  value={passwordConfrim}
                  required
                />
              </div> }
              <button type="submit" className={classes.signup}>
              <p className={classes.button}>SIGN UP</p>
              </button>
            </form>
          </section>
      ) : (
        <p>회원가입 성공</p>
      )}

    </div>
  );
}

export default Signup;
