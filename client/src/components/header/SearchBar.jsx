import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (!searchWord) {
      setFilteredData([]);
      setSelectedId("");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/popups/search?corporation=${searchWord}`
        );
        const resData = res.data;
        console.log("response", resData);

        const matchingData = resData.find((item) =>
          item.corporation.includes(searchWord)
        );

        setSelectedId(matchingData ? matchingData._id : "");
        setFilteredData(resData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchWord]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Enter 키를 누르면 URL 업데이트
      window.location.href = `/popups/search/${selectedId}`;
    }
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder={placeholder}
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onKeyPress={handleKeyPress} // Enter 키 이벤트 처리
      />
      <div className={classes.search}></div>
      {filteredData.length !== 0 && (
        <div className={classes.data_result}>
          {filteredData.map((value, key) => (
            <div key={key}>
              <Link to={`/popups/search/${selectedId}`}>
                <p>{value.corporation}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
