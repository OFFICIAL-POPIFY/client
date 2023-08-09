import React, { useState } from "react";
import classes from "./Information.module.css";

function Information({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const hashTag = event.target.value;
    const newFilter = data.filter((value) => {
      return value.hash_tag.includes(hashTag);
    });

    if (hashTag === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div className={classes.wrapper}>
      <h1>팝업스토어 정보</h1>
      <p>해시태그를 입력해서 팝업스토어를 탐색해보세요!</p>
      <div className={classes.search}>
        <div className={classes.search_input}>
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          />
        </div>
        {filteredData.length !== 0 && (
          <div className={classes.data_result}>
            {filteredData.map((value, key) => {
              return (
                <div key={key}>
                  <a
                    className={classes.data_item}
                    href={value.placeurl}
                    target="_blank"
                  >
                    <p>{value.tags}</p>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Information;
