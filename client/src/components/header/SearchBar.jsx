import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

function SearchBar({ placeholder, data }) {
  const corporation = { placeholder };
  const FILTER_URL = `${process.env.REACT_APP_BASE_URL}/popups/search?corporation=${corporation}`;
  const [filteredData, setFilteredData] = useState([]);
  const [resData, setResData] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(FILTER_URL);
        setResData(res.data);
        console.log("response", res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [FILTER_URL]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    if (!searchWord) {
      setFilteredData([]);
      setSelectedId("");
      return;
    }

    const newFilter = data.filter((value) => {
      return value.corporation.includes(searchWord);
    });

    setFilteredData(newFilter);

    const matchingData = resData.find((item) =>
      item.corporation.includes(searchWord)
    );

    setSelectedId(matchingData?._id);
  };

  return (
    <div className={classes.container}>
      <input type="text" placeholder={placeholder} onChange={handleFilter} />
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
