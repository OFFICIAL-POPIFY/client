import React, { useState, useEffect } from "react";
import Rating from "react-rating-stars-component";
import ImageUpload from "react-image-upload";
import classes from "./CommentForm.module.css";
import axios from "../api/axios";

const CommentForm = () => {
  const [rate, setRating] = useState(0);
  const [contents, setComment] = useState("");
  const [images, setImages] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const popupID = window.location.pathname.split("/")[3];
  const STORE_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${popupID}`;
  const COMMENT_URL = `${process.env.REACT_APP_BASE_URL}/reviews/${popupID}`;

  const [commentsList, setCommentsList] = useState([]);
  const [popupImages, setPopupImages] = useState([]);
  console.log("commentsList", commentsList);
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
      console.log("Response Data:", response.data);
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
    const fetchData = async () => {
      try {
        const response = await axios.get(STORE_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const popupData = response.data; // response에서 받은 데이터
        const popupImages = popupData.popup_imgs; // popup_imgs 배열

        setPopupImages(popupImages);
        setCommentsList(popupData.reviews);
      } catch (error) {
        console.error("리뷰 불러오기 오류:", error);
      }
    };
    fetchData();
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

  const response = axios.get(STORE_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  // rewiew.popup 과 reviewID를 일치시켜서 해당 리뷰를 삭제 할 수 있도록 함
  const deleteReview = async (reviewID) => {
    try {
      const reviewID = response?.data?.id;
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
        위 코드에서는 commentsList 배열을 사용하여 코멘트 목록을 출력하도록
        수정했습니다. 이렇게 수정하면 주어진 코멘트 데이터를 제대로 출력할 수
        있을 것입니다.
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
