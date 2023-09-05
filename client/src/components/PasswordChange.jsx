import { useRef, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import styled from "styled-components";
import classes from "./PasswordChange.module.css";
import { HiOutlineKey } from "react-icons/hi2";
function PasswordChange() {
  const { setAuth, value } = useContext(AuthContext);
  const [passwordConfirm, setPasswordConfrim] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const password = value?.auth?.password;
  const changeRef = useRef();
  const newRef = useRef();

  const PASSWORD_URL = `${process.env.REACT_APP_BASE_URL}/users/profile`;
  const handleCheckPassword = (e) => {
    e.preventDefault();
    if (passwordConfirm !== "" && passwordConfirm == password) {
      alert("비밀번호가 일치합니다.");
    } else {
      console.log("컨펌:", passwordConfirm, " 유저:", password);
      alert("비밀번호가 일치하지 않습니다.");
    }
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        PASSWORD_URL,
        JSON.stringify({ password: newPassword }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const roles = response?.data?.roles;
      console.log("비밀번호 변경:", value, password);
      setAuth({ ...value, password: newPassword, roles });
      console.log("비밀번호가 변경되었습니다.");
      setNewPassword("");
      setNewPasswordConfirm("");
    } catch (err) {
      console.error("비밀번호 변경 오류:", err);
    }
  };
  return (
    <Styledform onSubmit={formSubmit}>
      <span>{value.userName}</span>
      <div className={classes.control}>
        <label htmlFor="change"></label>
        <div className={classes.icon}>
          <HiOutlineKey size="20" />
        </div>
        <input
          id="1"
          ref={changeRef}
          value={passwordConfirm}
          type="password"
          placeholder="현재 비밀번호"
          onChange={(e) => setPasswordConfrim(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="newPassword"></label>
        <div className={classes.icon}>
          <HiOutlineKey size="20" />
        </div>
        <input
          id="2"
          ref={newRef}
          value={newPassword}
          type="password"
          placeholder="새 비밀번호"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <div className={classes.icon}>
          <HiOutlineKey size="20" />
        </div>
        <input
          id="3"
          ref={newRef}
          value={newPasswordConfirm}
          type="password"
          placeholder="새 비밀번호 확인"
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
        />

        <button className="submit" onClick={handleCheckPassword}>
          변경하기
        </button>
      </div>
    </Styledform>
  );
}

const Styledform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .submit {
    position: absolute;
    display: block;
    width: 5rem;
    height: 1.875rem;
    background-color: #000000;
    color: #fff;
    font-family: "PretendardR";
    font-size: 13px;
    text-align: center;
    border-radius: 0.3125rem;
    border: none;
    cursor: pointer;
    right: 1rem;
  }
  .submit:hover {
    background-color: #000000;
  }
`;
export default PasswordChange;
