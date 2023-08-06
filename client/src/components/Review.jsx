import React, { useState, useRef, useEffect } from "react";

import classes from "./Review.module.css";

function Review() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    bodyUrl: "",
  });
  const writeNewPost = (userId, title, bodyUrl) => {
    const newPost = {
      key: Date.now().toString(),
      userId: userId,
      title: title,
      bodyUrl: bodyUrl,
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const updatePost = (postId, title, bodyUrl, fileUrl) => {
    const updatedPosts = posts.map((post) =>
      post.key === postId ? { ...post, title: title, bodyUrl: bodyUrl } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const bodyUrl = bodyRef.current.value;

    if (editPostId) {
      updatePost(editPostId, title, bodyUrl);
    } else {
      writeNewPost("user_id", title, bodyUrl);
    }

    titleRef.current.value = "";
    bodyRef.current.value = "";

    setFormData({
      title: "",
      bodyUrl: "",
    });

    setEditPostId(null);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.key !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleEdit = (postId) => {
    const postToEdit = posts.find((post) => post.key === postId);
    if (postToEdit) {
      titleRef.current.value = postToEdit.title;
      bodyRef.current.value = postToEdit.bodyUrl;
      setEditPostId(postId);
    }
  };

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div>
      <main className={classes.auth}>
        <h1>리뷰</h1>
        <div className={classes.wrapper}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.control}>
              <label htmlFor="title">제목</label>
              <input
                className={classes.title}
                id="title"
                ref={titleRef}
              ></input>
            </div>
            <div className={classes.control}>
              <label htmlFor="body">본문</label>
              <input id="body" className={classes.body} ref={bodyRef}></input>
            </div>

            <div className={classes.control}></div>
            <button className={classes.button} type="submit">
              {editPostId ? "수정" : "제출"}
            </button>
          </form>
        </div>
      </main>
      <figure className={classes.figure}>
        <section className={classes.posts}>
          <div className={classes.control}>
            <ul>
              {posts.map((post) => (
                <li key={post.key}>
                  <h3>{post.title}</h3>
                  <img src={post.picture} alt={post.title} />
                  <button onClick={() => handleDelete(post.key)}>삭제</button>
                  <button onClick={() => handleEdit(post.key)}>수정</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </figure>
    </div>
  );
}

export default Review;
