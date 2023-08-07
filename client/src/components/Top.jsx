import React from "react";
import classes from "./Top.module.css";

function Top() {
  const topBtnhandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.wrap}>
      <div></div>
      <button className={classes.top} onClick={topBtnhandler}>
        Top
      </button>
      <div></div>
    </div>
  );
}

export default Top;
