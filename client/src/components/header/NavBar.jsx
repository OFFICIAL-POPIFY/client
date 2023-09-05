// NavBar.js
import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar";
import PopupData from "../data.json";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthProvider";
function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const LOGOUT_URL = `${process.env.REACT_APP_BASE_URL}/users/logout`;

  const dropdownRef = useRef(null);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      window.location.href = "/login";
      alert("로그아웃 되었습니다.");
      await axios.get(LOGOUT_URL);
      setAuth(null);
    } catch (error) {
      console.error("로그아웃 오류:", error);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
      if (isDropdownOpen) {
      window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    // Add event listener for document click
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className={`${classes.header} ${isSticky ? classes.sticky : ""}`}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className={classes.logo} />
          </Link>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <div className={classes.container}>
              <SearchBar placeholder="Search..." data={PopupData} />
            </div>
            <div
              className={`${classes.dropdown} ${isDropdownOpen ? classes.active : ""
              }`}
              ref={dropdownRef} // Assign the ref to the dropdown element
            >
              <button
                className={`${classes.dropdown_button}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDropdownToggle();
                }}
              >
                <GiHamburgerMenu style={{ width: "50px", height: "50px" }} />
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
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
