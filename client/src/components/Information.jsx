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
    <div>
      <h1>팝업스토어 소개</h1>

      <div className={classes.search}>
        <div className={classes.search_input}>
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <button>제출</button>
        </div>
        {filteredData.length !== 0 && (
          <div className={classes.data_result}>
            {filteredData.map((value, key) => {
              return (
                <div key={key}>
                  <a
                    className={classes.data_item}
                    href={value.place_url}
                    target="_blank"
                  >
                    <p>{value.hash_tag}</p>
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
