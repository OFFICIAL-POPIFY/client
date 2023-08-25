import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Profile.module.css";

function Profile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const PROFILE_URL = `${process.env.REACT_APP_BASE_URL}/users/profile`;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(PROFILE_URL, {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // id를 상위 범위에서 가져와서 사용
  const id = profile?.user_id;

  return (
    <div>
          <p className={classes.subtitle}>기본 정보</p>
       <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
      <p>{id}</p>
    </div>
  );
}

export default Profile;
