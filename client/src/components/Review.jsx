import React, { useState, useRef, useEffect } from "react";

import classes from "./Review.module.css";

function Review() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const fileUrlRef = useRef();
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    bodyUrl: "",
    fileUrl: "",
  });
  const writeNewPost = (userId, title, bodyUrl, fileUrl) => {
    const newPost = {
      key: Date.now().toString(),
      userId: userId,
      title: title,
      bodyUrl: bodyUrl,
      fileUrl: fileUrl,
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleImageUpload = (e, files) => {
    e.preventDefault();
    console.log("Image upload logic goes here");
  };

  const updatePost = (postId, title, bodyUrl, fileUrl) => {
    const updatedPosts = posts.map((post) =>
      post.key === postId
        ? { ...post, title: title, bodyUrl: bodyUrl, fileUrl: fileUrl }
        : post
    );
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setFileUrls(fileUrls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const bodyUrl = bodyRef.current.value;
    const fileUrl = fileUrlRef.current.value;

    if (editPostId) {
      updatePost(editPostId, title, bodyUrl, fileUrl);
    } else {
      writeNewPost("user_id", title, bodyUrl, fileUrl);
    }

    titleRef.current.value = "";
    bodyRef.current.value = "";
    fileUrlRef.current.value = "";

    setFormData({
      title: "",
      bodyUrl: "",
      fileUrl: "",
    });

    setFileUrls([]);
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
      fileUrlRef.current.value = postToEdit.fileUrl;
      setEditPostId(postId);
    }
  };

  const [fileUrls, setFileUrls] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div>
      <main className={classes.auth}>
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
              <input id="text" className={classes.image} ref={bodyRef}></input>
            </div>

            <div className={classes.control}>
              {/* 여기서부터 */}
              <div>
                <form onSubmit={(e) => handleImageUpload(e, fileUrls)}>
                  <label>
                    파일:
                    <input
                      multiple
                      accept="image/*"
                      type="file"
                      onChange={handleImageChange}
                      ref={fileUrlRef}
                    />
                  </label>
                </form>
                {fileUrls?.length > 0 && (
                  <ul>
                    {fileUrls.map((url, index) => (
                      <li key={index}>
                        <img src={url} alt="사용자 첨부 이미지" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* 여기까지 */}
            </div>
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
