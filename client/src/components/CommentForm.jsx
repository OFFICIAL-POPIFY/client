import React, { useState, useEffect, useContext } from "react";
import Rating from "react-rating-stars-component";
import ImageUpload from "react-image-upload";
import classes from "./CommentForm.module.css";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
// Random Query Parameter

const CommentForm = () => {
  const [rate, setRating] = useState(0);
  const [contents, setComment] = useState("");
  const [images, setImages] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const popupID = window.location.pathname.split("/")[3];
  const { value } = useContext(AuthContext);
  const id = value?.auth?.user_id;
  const STORE_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${popupID}`;
  const COMMENT_URL = `${process.env.REACT_APP_BASE_URL}/reviews/${popupID}`;

  const [commentsList, setCommentsList] = useState([]);
  const [popupImages, setPopupImages] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(STORE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const popupData = response.data;
      const popupImages = popupData.popup_imgs;

      setPopupImages(popupImages);
      setCommentsList(popupData.reviews);
    } catch (error) {
      console.error("리뷰 불러오기 오류:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    window.location.reload();
    event.preventDefault();

    try {
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
      console.log("Response Data:", response.data);
      setRating(0);
      setComment("");
      setImages([]);

      const newComment = {
        rating: rate,
        comments: contents,
        review_img: images.dataURL,
      };
      setCommentsList((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };
  const deleteReview = async (reviewID) => {
    try {
      const DELETE_URL = `${process.env.REACT_APP_BASE_URL}/reviews/${reviewID}`;
      const response = await axios.delete(DELETE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Response Data:", response.data);

      setCommentsList(
        commentsList.filter((comment) => comment._id !== reviewID)
      );
    } catch (error) {
      console.error("리뷰 삭제 오류:", error);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleImageUpload = (imageList) => {
    setImages(imageList);
  };

  return (
    <>
    <h1>REVIEW</h1>
      <form className={classes.commentForm} onSubmit={handleSubmit}>
        <div>
          <label className={classes.commentFormLabel}></label>
          <textarea
            className={classes.commentFormTextarea}
            value={contents}
            onChange={handleCommentChange}
          />
        </div>
        <div>
          <label className={classes.commentFormLabel}></label>
          <Rating
            value={rate}
            count={5}
            onChange={handleRatingChange}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div>
          <label className={classes.commentFormLabel}></label>
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
      <div>
        <ul>
          {commentsList.map((commentItem, index) => (
            <li key={index} className={classes.commentItem}>
              <div>아이디:{id}</div>
              <div>별점: {commentItem.rate}</div>
              <div>코멘트 내용: {commentItem.contents}</div>
              <button onClick={() => deleteReview(commentItem._id)} className={classes.commentFormButton2}>
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
    </>
  );
};

export default CommentForm;