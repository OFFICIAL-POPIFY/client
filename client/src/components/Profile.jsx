import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <h2>프로필 정보</h2>
      <p>이름: {id}</p>
      <p>이메일: {profile.email}</p>
      {/* 추가적인 프로필 정보 표시 */}
    </div>
  );
}

export default Profile;
