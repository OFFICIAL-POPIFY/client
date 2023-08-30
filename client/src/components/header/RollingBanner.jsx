import React from "react";
import classes from "./RollingBanner.module.css";

function RollingBanner() {
  return <>
    <div className={classes.container}>
      <div className={classes.text}>
        ＊ Popify Launching EVENT * -------     
        Popify 팝업스토어 체험단 1기 모집 -------
        * 팝업스토어 리뷰 작성 시 팝업 방문지원금 5만원 *
      </div>
    </div>
  </>
}

export default RollingBanner;
