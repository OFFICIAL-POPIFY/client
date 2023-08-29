import React, { useState } from "react";
import classes from "./Information.module.css";

function Information({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const hashTag = event.target.value;
    const newFilter = data.filter((value) => {
      return value.tags.some((tag) => tag.includes(hashTag));
    });
    if (!hashTag) {
      setFilteredData([]);
      return;
    }
    setFilteredData(newFilter);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.blink}>
        <h1>“왕크니까 왕귀여워” 더현대-흰디 팝업 스토어</h1>
        <p>기   간 : 2023년 7월 28일 ~ 9월 1일</p>
        <p>위   치 : 서울 영등포구 여의대로 108 더현대 서울</p>
        <p>운영시간 : 09시 ~ 18시</p>
        <p>입장요금 : 무료</p>
        <div className={classes.search}>
          <div className={classes.search_input}>
            <input
              type="text"
              placeholder={placeholder}
              onChange={handleFilter}
            />
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className={classes.data_result}>
            {filteredData.map((value, key) => (
              <div key={key}>
                <a
                  className={classes.data_item}
                  href={value.placeurl}
                  target="_blank"
                >
                  <p>{value.tags.join(" ")}</p>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Information;
