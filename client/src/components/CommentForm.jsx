import React, { useState, useEffect, useContext } from "react";
import Rating from "react-rating-stars-component";
import ImageUpload from "react-image-upload";
import classes from "./CommentForm.module.css";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const CommentForm = () => {
  const { value } = useContext(AuthContext);
  const [rate, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [commentsList, setCommentsList] = useState([]); // 코멘트 목록을 저장하는 상태 추가
  const isLoggedIn = true; // // 로그인 상태 확인용 변수 (예시로 true, false로 로그인 상태 가정) <-- 임시 방편
  const popupID = window.location.pathname.split("/")[3];

  const REVIEW_URL = `${process.env.REACT_APP_BASE_URL}/reviews/popups/${popupID}`;
  const handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();
    // 여기서 서버로 평점, 코멘트 내용, 이미지를 보내는 로직을 추가해야 함
    // 서버로 데이터를 보내는 방법은 axios, fetch 등을 사용
    {
      /*axios 통신// try {
      // 서버로 보낼 데이터
       body: {
            rate: rate,
            comments: comment,
            review_img: images.map((image) => image.dataURL),
          },
      // 서버로 데이터를 보내는 POST 요청
      const response = await axios.post('http://your-server-url/api/comments', data);
  
      // 서버 응답 처리 (예: 성공 메시지 출력)
      console.log('서버 응답:', response.data);
    } catch (error) {
      // 에러 처리 (예: 에러 메시지 출력)
      console.error('에러 발생:', error);
    } */
    }

    // 로그인 상태 확인 <-- 임시 방편
    if (!isLoggedIn) {
      alert("로그인 후에만 코멘트를 작성할 수 있습니다.");
      return;
    }

    // 코멘트를 예시로 console.log로 출력
    // console.log('Rating:', rating);
    // console.log('Comment:', comment);
    // console.log('Images:', images);

    // 폼 데이터를 코멘트 목록에 추가
    const newComment = {
      rating: rate,
      comments: comment,
      review_img: images.map((image) => image.dataURL),
    };
    setCommentsList([...commentsList, newComment]);

    // 폼 데이터 초기화
    setRating(0);
    setComment("");
    setImages([]);
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
          value={comment}
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
