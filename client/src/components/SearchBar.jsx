import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import { BsSearchHeart } from "react-icons/bs";
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.place_name.includes(searchWord);
    });
    setFilteredData(newFilter);
  };
  // search창 드랍다운 메뉴 구현하기
  return (
    <>
      <div className={classes.search}>
        <div className={classes.search_input}>
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <button>
            <BsSearchHeart />
          </button>
        </div>
        {filteredData.length !== 0 && (
          <div className={classes.data_result}>
            {filteredData.map((value, key) => {
              return (
                <a
                  className={classes.data_item}
                  href={value.place_url}
                  target="_blank"
                >
                  <p>{value.place_name}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
