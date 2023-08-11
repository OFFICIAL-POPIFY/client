import React from "react";
import { useSelector } from "react-redux";
import classes from "./CommentForm.module.css";
const CommentList = () => {
  const commentsList = useSelector((state) => state.comments) || [];

  return (
    <div>
      <h3>코멘트 목록</h3>
      {commentsList.map((comment, index) => (
        <div key={index}>
          <p>별점: {comment.rating}</p>
          <p>코멘트 내용: {comment.comment}</p>
          {comment.images.map((image, imgIndex) => (
            <img
              key={imgIndex}
              className={classes.commentImagePreview}
              src={image}
              alt={`Image ${imgIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
