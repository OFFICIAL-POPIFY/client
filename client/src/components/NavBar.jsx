// NavBar.js
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar";
import PopupData from "./data.json";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // 서버에 로그아웃 요청 보내기
      await axios.get("/logout"); // 실제 엔드포인트는 서버에 맞게 변경

      // 로그아웃 상태로 변경
      setAuth(null);
    } catch (error) {
      console.error("로그아웃 오류:", error);
    }
    window.location.href = "/login";
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header className={`${classes.header} ${isSticky ? classes.sticky : ""}`}>
        <Link to="/">
          <img src="./images/logo.png" alt="logo" className={classes.logo} />
        </Link>
        <nav className={classes.navigation}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <SearchBar placeholder="검색어를 입력하세요" data={PopupData} />
            <div className={classes.dropdown}>
              <button className={classes.dropdown_button}>
                <GiHamburgerMenu />
              </button>

              <div className={classes.dropdown_contents}>
                <Link to="/about">About</Link>
                <Link to="/login">
                  <IoMdLogIn />
                </Link>
                <Link onClick={handleLogout}>
                  <IoMdLogOut />
                </Link>
                <Link to="/mypage">Mypage</Link>
                <Link to="https://www.instagram.com/popify.official/">
                  <BsInstagram />
                </Link>
                <Link to="/contents">Contents</Link>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
