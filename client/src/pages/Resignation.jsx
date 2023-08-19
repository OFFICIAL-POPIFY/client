import React, { useState } from "react";
import styled from "styled-components";
import axios from "../api/axios";

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

      const userId = response.data.id;
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, {
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
      <h1>회원탈퇴</h1>
      <p>
        * 탈퇴 후에도 게시판형 서비스에 등록한 게시물은 그대로 남아 있습니다.
      </p>
      <button onClick={resignHandler}>탈퇴하기</button>
      {errorMessage && <p>{errorMessage}</p>}
    </Wrap>
  );
}

const Wrap = styled.div`
  h1 {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button {
    width: 80px;
    height: 30px;
    background-color: #000000;
    flex-shrink: 0;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
};
`;
export default Resignation;
