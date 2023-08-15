import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 프로필 정보를 백엔드에서 가져오는 함수
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/users/profile");
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

  return (
    <div>
      <h2>프로필 정보</h2>
      <p>이름: {profile.name}</p>
      <p>이메일: {profile.email}</p>
      {/* 추가적인 프로필 정보 표시 */}
    </div>
  );
}

export default Profile;
