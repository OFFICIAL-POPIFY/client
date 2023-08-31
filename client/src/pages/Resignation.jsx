import React, { useState } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import classes from "./Resignation.module.css";


function Resignation() {
  const [errorMessage, setErrorMessage] = useState("");

  const resignHandler = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      alert("정말 회원 탈퇴를 진행하시겠습니까?");

      const userId = localStorage.getItem("id");
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      alert("회원 탈퇴가 완료되었습니다.");
    } catch (error) {
      setErrorMessage("회원 탈퇴를 처리하는 동안 오류가 발생했습니다.");
      console.error("회원 탈퇴 오류:", error);
    }
  };

  return (
    <Wrap>
      <h1>회원 탈퇴</h1>
      <p>
        * 탈퇴 후에도 게시판형 서비스에 등록한 게시물은 그대로 남아있습니다.
      </p>
      <div className={classes.rbutton}>
      <button onClick={resignHandler}>탈퇴하기</button>
      {errorMessage && <p>{errorMessage}</p>}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`

  h1 {
    color: #000;
    font-family: "PretendardEB";
    font-size: 18px;
    line-height: normal;
    margin-bottom: 0.63rem;
  }

  P{
    color: #000;
    font-family: "PretendardM";
    font-size: 15px;
    line-height: normal;
    margin-bottom: 0.94rem;
  }

  button {
    width: 5rem;
    height: 1.875rem;
    background-color: #000000;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    border: none;
    color: #fff;
    text-align: center;
    font-family: "PretendardR";
    font-size: 13px;
    line-height: normal;
  }
};
`;


export default Resignation;
