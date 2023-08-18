import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../api/axios";

function MyReview() {
  useEffect(() => {
    callReview();
  }, []);
  const callReview = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/reviews`
    );
    console.log(response.data);
  };
  return (
    <Container>
      <h1>내가 쓴 리뷰</h1>
      <Review></Review>
    </Container>
  );
}

export default MyReview;
const Container = styled.div`
  display: flex;
`;
const Review = styled.div``;
