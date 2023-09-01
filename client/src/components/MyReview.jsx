import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import { TiDocumentText } from "react-icons/ti";
import classes from "./MyReview.module.css";

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
      console.log("리뷰 불러오기 성공:", response?.data);
      setReviews(response?.data);
    } catch (error) {
      console.error("리뷰 불러오기 오류:", error);
    }
  };

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "…";
    }
  };

  return (
    <Container>
      <p className={classes.subtitle}>내가 쓴 리뷰</p>
      <Review>
        <ul>
          <ul>
            {reviews.map((review) => (
              <li key={review._id}>
                  <div className={classes.icon}>
                    <TiDocumentText size="20"/>
                  </div>
                  <div className={classes.popup}>
                    {"["}
                    {truncateText(review.popup.corporation, 17)}
                    {"]"}
                  </div>
                  <div className={classes.contents}>{truncateText(review.contents, 35)}</div>
              </li>
            ))}
          </ul>
        </ul>
      </Review>
    </Container>
  );
}

export default MyReview;

const Container = styled.div`
  flex-shrink: 0;
  width: 44rem;
  height: 3.12rem;
  align-items: center;
  justify-content: center;
  margin-left: 7.5rem;
`;

const Review = styled.div`
  ul {
    list-style: none;
    padding: 0;
  
  }
  li {
    border: 0.5px solid #ccc;
    border-radius: 0.3125rem;
    padding: 10px;
  }
`;
