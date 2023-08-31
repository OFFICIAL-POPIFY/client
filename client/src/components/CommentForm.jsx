import React, { useState, useEffect } from "react";
import Rating from "react-rating-stars-component";
import axios from "axios";
import classes from "./CommentForm.module.css";

const CommentForm = () => {
  const [rate, setRating] = useState(0);
  const [contents, setContent] = useState("");
  const [images, setImages] = useState(null); // 파일 업로드용 상태 변수
  const [accessToken] = useState(localStorage.getItem("accessToken"));
  const popupID = window.location.pathname.split("/")[3];
  const STORE_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${popupID}`;
  const COMMENT_URL = `${process.env.REACT_APP_BASE_URL}/reviews/${popupID}`;

  const [commentsList, setCommentsList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(STORE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const popupData = response.data;
      const popupImages = popupData.popup_imgs;

      setCommentsList(popupData.reviews);
    } catch (error) {
      console.error("리뷰 불러오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setImages(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("rate", rate);
      formData.append("contents", contents);
      if (images) {
        formData.append("review_img", images); // 이미지 파일 추가
      }

      const response = await axios.post(COMMENT_URL, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response Data:", response.data);
      setRating(0);
      setContent("");
      setImages(null);

      const newComment = {
        rate: rate,
        contents: contents,
        review_img: response.data.location,
      };
      setCommentsList((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <div>
        <h3>코멘트 목록</h3>
        <ul>
          {commentsList.map((commentItem, index) => (
            <li key={index} className={classes.commentItem}>
              <div>별점: {commentItem.rate}</div>
              <div>코멘트 내용: {commentItem.contents}</div>
            </li>
          ))}
        </ul>
      </div>
      <form className={classes.commentForm} onSubmit={handleSubmit}>
        <div>
          <label className={classes.commentFormLabel}>별점:</label>
          <Rating
            value={rate}
            count={5}
            onChange={handleRatingChange}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div>
          <label className={classes.commentFormLabel}>코멘트:</label>
          <textarea
            className={classes.commentFormTextarea}
            value={contents}
            onChange={handleCommentChange}
          />
        </div>
        <div>
          <label className={classes.commentFormLabel}>사진 업로드:</label>
          <input
            type="file"
            accept=".jpg,.png,.gif"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className={classes.commentFormButton}>
          제출
        </button>
      </form>
    </>
  );
};

export default CommentForm;
