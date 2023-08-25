import React, { useState, useEffect, useContext } from "react";
import Rating from "react-rating-stars-component";
import ImageUpload from "react-image-upload";
import classes from "./CommentForm.module.css";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const CommentForm = () => {
  const { value } = useContext(AuthContext);
  const [rate, setRating] = useState(0);
  const [contents, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [commentsList, setCommentsList] = useState([]); // 코멘트 목록을 저장하는 상태 추가// const isLoggedIn = true; // // 로그인 상태 확인용 변수 (예시로 true, false로 로그인 상태 가정) <-- 임시 방편
  const popupID = window.location.pathname.split("/")[3];
  const COMMENT_URL = `${process.env.REACT_APP_BASE_URL}/reviews/${popupID}`;
  const REVIEW_URL = `${process.env.REACT_APP_BASE_URL}/reviews/popups/${popupID}`;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const accessToken = localStorage.getItem("accessToken"); // 로컬 스토리지에서 JWT 토큰 가져오기
      const response = await axios.post(
        COMMENT_URL,
        {
          rate: rate,
          contents: contents,
          review_img: images.dataUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // JWT 토큰을 Authorization 헤더에 첨부
          },
        }
      );

      // 응답 처리 (필요한대로)
      console.log("서버 응답:", response.data);

      // 성공적으로 제출한 후 폼 재설정
      setRating(0);
      setComment("");
      setImages([]);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  useEffect(() => {
    const callReview = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(REVIEW_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log("Response Data:", response.data);
        setComment(response?.data);
      } catch (error) {
        console.error("리뷰 불러오기 오류:", error);
      }
    };
    callReview();
  }, []);

  // 별점 변경 핸들러
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // 코멘트 입력창 변경 핸들러
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // 이미지 업로드 핸들러
  const handleImageUpload = (imageList) => {
    setImages(imageList);
  };

  // 코멘트 제출 핸들러

  return (
    <form className={classes.commentForm} onSubmit={handleSubmit}>
      <div>
        {commentsList.map((commentItem, index) => (
          <div key={index} className={classes.commentItem}>
            <div>별점: {commentItem.rating}</div>
            <div>코멘트 내용: {commentItem.comments}</div>
            {commentItem.review_img.length > 0 && (
              <div>
                <h4>업로드된 이미지:</h4>
                <div className={classes.commentImagePreviewContainer}>
                  {commentItem.review_img.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      className={classes.commentImagePreview}
                      src={image}
                      alt={`Image ${imgIndex}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3>코멘트 목록</h3>
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
        <ImageUpload
          withIcon={true}
          buttonText="이미지 선택"
          onChange={handleImageUpload}
          imgExtension={[".jpg", ".png", ".gif"]}
          maxFileSize={5242880}
          withPreview={true}
        />
      </div>
      <button type="submit" className={classes.commentFormButton}>
        제출
      </button>

      {/* 코멘트 목록 출력 */}
    </form>
  );
};

export default CommentForm;
