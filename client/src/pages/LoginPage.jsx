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
  const [validateUserText, setValidateUserText] = useState("");
  const [validatePasswordText, setvalidatePasswordText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, [succsess]);
  useEffect(() => {
    setErrMsg("");
  }, [user_id, password]);

  const validateUserName = (user_id) => {
    return String(user_id)
      .toLowerCase()
      .match(/^(?=.*[A-Za-z0-9]).{2,30}$/);
  };
  const validatePassword = (password) => {
    return String(password)
      .toLowerCase()
      .match(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+]).{6,20}$/);
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (!validateUserName(user_id)) {
      setValidateUserText(
        "아이디는 6자 이상의 영문, 숫자, _ 조합이어야 합니다."
      );
      return;
    } else {
      setValidateUserText("");
    }
    if (!validatePassword(password)) {
      setvalidatePasswordText(
        "비밀번호는 6자 이상 16자 이하의 영문, 숫자, 특수문자 조합이어야 합니다."
      );
      return;
    } else {
      setvalidatePasswordText("");
    }

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

      // 로그인 성공 후 로그인 정보 저장
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
                <p className="validate">{validateUserText}</p>

                <div className={classes.icon2}>
                  <TiDelete size="20" />
                </div>
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <p className="validate">{validatePasswordText}</p>
                <div className={classes.icon2}>
                  <TiDelete size="20" />
                </div>
              </div>
              <button type="submit" className={classes.login}>
                <p className={classes.button}>LOGIN</p>
              </button>
            </form>
          </section>
        </main>
      ) : (
        <></>
      )}
      <div className={classes.linktos}>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default Login;
