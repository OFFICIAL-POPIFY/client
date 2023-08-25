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
  const [commentsList, setCommentsList] = useState([]);
  const popupID = window.location.pathname.split("/")[3];
  const COMMENT_URL = `${process.env.REACT_APP_BASE_URL}/reviews/${popupID}`;
  const REVIEW_URL = `${process.env.REACT_APP_BASE_URL}/reviews/popups/${popupID}`;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.post(
        COMMENT_URL,
        {
          rate: rate,
          contents: contents,
          review_img: images.dataURL,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("서버 응답:", response.data);

      setRating(0);
      setComment("");
      setImages([]);

      const newComment = {
        rating: rate,
        comments: contents,
        review_img: images.dataURL,
      };
      setCommentsList([...commentsList, newComment]);
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
        setCommentsList(response?.data);
      } catch (error) {
        console.error("리뷰 불러오기 오류:", error);
      }
    };
    callReview();
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleImageUpload = (imageList) => {
    setImages(imageList);
  };
  const accessToken = localStorage.getItem("accessToken");
  const response = axios.get(REVIEW_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const reviewID = response?.data?.id;
  // rewiew.popup 과 reviewID를 일치시켜서 해당 리뷰를 삭제 할 수 있도록 함
  const deleteReview = async (reviewID) => {
    try {
      const DELETE_URL = `${process.env.REACT_APP_BASE_URL}/reviews/${reviewID}`;
      const response = await axios.delete(DELETE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Response Data:", response.data);

      // Update the commentsList state after successful deletion
      setCommentsList(
        commentsList.filter((comment) => comment._id !== reviewID)
      );
    } catch (error) {
      console.error("리뷰 삭제 오류:", error);
    }
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
              <button onClick={() => deleteReview(commentItem._id)}>
                삭제
              </button>
              {commentItem.review_img && commentItem.review_img.length > 0 && (
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
      </form>
    </>
  );
};

export default CommentForm;
