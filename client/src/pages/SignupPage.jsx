import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./SignupPage.module.css";
function Signup() {
  const dispatch = useDispatch();
  const signuphandler = (event) => {
    event.preventDefault();

    dispatch(authActions.signup());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={signuphandler}>
          <div className={classes.control}>
            <label htmlFor="id"></label>
            <input placeholder="아이디" type="text" id="id" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password"></label>
            <input placeholder="비밀번호" type="password" id="password" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password-confirm"></label>
            <input
              placeholder="비밀번호확인"
              type="text"
              id="passwordconfirm"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email"></label>
            <input placeholder="이메일" type="text" id="email" />
          </div>
          <button>signup</button>
        </form>
      </section>
    </main>
  );
}

export default Signup;
