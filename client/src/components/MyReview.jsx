import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "../api/axios";

function MyReview() {
  const id = localStorage.getItem("id");
  const REVIEW_URL = `${process.env.REACT_APP_BASE_URL}/reviews/user`;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    callReview();
  }, []);
  const callReview = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(REVIEW_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: { id: id },
      });
      console.log(localStorage.getItem("id"));
      console.log("Response Data:", response.data);
      setReviews(response?.data);
    } catch (error) {
      console.error("리뷰 불러오기 오류:", error);
    }
  };
  return (
    <Container>
      <h1>내가 쓴 리뷰</h1>
      <Review>
        <ul>
          {reviews?.map((review) => (
            <li key={review?.id}>{review?.content}</li>
          ))}
        </ul>
      </Review>
    </Container>
  );
}

export default MyReview;
const Container = styled.div`
  width: 770px;
  height: 400px;
  flex-shrink: 0;
  h1 {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  display: flex;
`;
const Review = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  }
`;
