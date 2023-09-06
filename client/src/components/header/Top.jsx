import { useState, useEffect } from "react";
import classes from "./Top.module.css";
import { FaAngleUp } from "react-icons/fa";

function Top() {
  const [isSticky, setIsSticky] = useState(false);
  const topBtnhandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <header className={`${isSticky ? classes.sticky : ""}`}>
      <div className={classes.wrap}>
        <div></div>
        <button className={classes.top} onClick={topBtnhandler}>
          <span style={{ marginTop: "0px" }}>
            <FaAngleUp size="15" />
          </span>
          TOP
        </button>
        <div></div>
      </div>
    </header>
  );
}

export default Top;
