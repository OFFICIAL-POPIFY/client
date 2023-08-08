import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import SearchBar from "./SearchBar";
import PopupData from "./data.json";
function NavBar() {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div>
      <header className={classes.header}>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contents">Contents</Link>
            </li>
            <li>
              <Link to="/mypage">Mypage</Link>
            </li>
            <div className={classes.auth}>
              <SearchBar placeholder="검색어를 입력하세요" data={PopupData} />

              <Link to="/login">
                <IoMdLogIn />
              </Link>
              <Link onClick={logout}>
                <IoMdLogOut />
              </Link>
              <Link to="https://www.instagram.com/popify.official/">
                <BsInstagram />
              </Link>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
