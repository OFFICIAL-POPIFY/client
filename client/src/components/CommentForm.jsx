import React, { useState, useEffect, useContext } from "react";
import Rating from "react-rating-stars-component";
import classes from "./CommentForm.module.css";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
import { FaCamera } from "react-icons/fa";
// Random Query Parameter

const CommentForm = () => {
  const [rate, setRating] = useState(0);
  const [contents, setComment] = useState("");
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const popupID = window.location.pathname.split("/")[3];
  const { value } = useContext(AuthContext);
  const id = value?.auth?.user_id;
  const STORE_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${popupID}`;
  const COMMENT_URL = `${process.env.REACT_APP_BASE_URL}/reviews/${popupID}`;
  const S3_URL = `${process.env.REACT_APP_BASE_URL}/s3/upload/images?directory=review`;
  const [commentsList, setCommentsList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(STORE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const popupData = response.data;
      setCommentsList(popupData.reviews);
    } catch (error) {
      console.error("리뷰 불러오기 오류:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const S3imageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("images", images);

      const response = await axios.post(S3_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response Data:", response.data);
      return response.data.images[0].url;
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const onSubmitReview = async (event) => {
    // window.location.reload();
    event.preventDefault();
    const imageUrl = await S3imageUpload();
    try {
      // const img = event.target.files[0];
      const requestData = {
        rate: rate,
        contents: contents,
        review_img: imageUrl,
      };
      const response = await axios.post(COMMENT_URL, requestData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Response Data:", response.data);
      setRating(0);
      setComment("");
      setImages([]);
      fetchData();
      const newComment = {
        rating: rate,
        comments: contents,
        review_img: imageUrl,
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

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    console.log("imagesList", image);
    setImages(image);
    setPreviewImage(URL.createObjectURL(image));
  };
  // const onSubmitReview = (event) => {
  //   console.log("onSubmitReview");
  //   event.preventDefault();
  //   // 1. 이미지 url 받아야함
  //   console.log("이미지 업로드");
  //   const imageUrl = S3imageUpload();
  //   // 2. 받은 url 을 review에 넣어야함
  // };

  return (
    <>
      <h1>REVIEW</h1>
      <form className={classes.commentForm} onSubmit={onSubmitReview}>
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
          <div>
          <FaCamera size="24" color="#808080"/><span> : </span>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {previewImage && <img src={previewImage} alt="Preview" />}
          </div>
        </div>
        <button
          type="submit"
          onClick={onSubmitReview}
          className={classes.commentFormButton}
        >
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
              <button
                onClick={() => deleteReview(commentItem._id)}
                className={classes.commentFormButton2}
              >
                삭제
              </button>

              {commentItem.review_img && commentItem.review_img.length > 0 && (
                <div>
                  <h4>업로드된 이미지:</h4>
                  <div className={classes.commentImagePreviewContainer}>
                    <img
                      className={classes.commentImagePreview}
                      src={commentItem.review_img}
                      alt={`Image ${commentItem.rewview_img}`}
                    />
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