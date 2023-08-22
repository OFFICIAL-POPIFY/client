import React, { useState } from "react";
import classes from "./SearchBar.module.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    if (!searchWord) {
      setFilteredData([]);
      return;
    }

    const newFilter = data.filter((value) => {
      return value.corporation.includes(searchWord);
    });

    setFilteredData(newFilter);
  };

  return (
    <div className={classes.container}>
      <input type="text" placeholder={placeholder} onChange={handleFilter} />
      <div className={classes.search}></div>
      {filteredData.length !== 0 && (
        <div className={classes.data_result}>
          {filteredData.map((value, key) => (
            <div key={key}>
              <a
                className={classes.data_item}
                href={value.placeurl}
                target="_blank"
              >
                <p>{value.corporation}</p>
              </a>
            </div>
          ))}
        </div>
      )}
    </div >
  );
}

export default SearchBar;
