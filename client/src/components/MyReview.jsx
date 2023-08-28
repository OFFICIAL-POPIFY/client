import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "../api/axios";
import {TiDocumentText} from "react-icons/ti";
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

      setReviews(response?.data);
    } catch (error) {
      console.error("리뷰 불러오기 오류:", error);
    }
  };

  return (
    <Container>
      <p className={classes.subtitle}>내가 쓴 리뷰</p>
      <Review>
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <div>
                <div className={classes.icon}>
              <TiDocumentText />
              </div>
                <div className={classes.popup}> [{review.popup}]</div>
                <div className={classes.contents}> {review.contents} </div>
              </div>
            </li>
          ))}
        </ul>
      </Review>
    </Container>
  );
}

export default MyReview;

const Container = styled.div`
  flex-shrink: 0;
  display: block;
  width: 48.125rem;
`;

const Review = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    border: 1px solid #ccc;
    border-radius: 0.3125rem;
    padding: 10px;
  }
`;
