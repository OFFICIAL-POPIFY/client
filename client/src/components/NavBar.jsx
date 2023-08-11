// NavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
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
                <Link onClick={logout}>
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
