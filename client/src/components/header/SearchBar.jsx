import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import axios from "../../api/axios";
import { Link } from "react-router-dom";

function SearchBar({ placeholder, data }) {
  const corporation = { placeholder };
  const FILTER_URL = `${process.env.REACT_APP_BASE_URL}/popups/search?corporation=${corporation}`;
  const [filteredData, setFilteredData] = useState([]);
  const [resData, setResData] = useState(null); // 추가

  // FILTER_URL에 대한 axios 요청
  const handleFilter = async (event) => {
    const searchWord = event.target.value;
    try {
      const res = await axios.get(FILTER_URL);
      setFilteredData(res.data);
      setResData(res.data); // res 값을 상태로 저장
      console.log("response", res.data);
    } catch (error) {
      console.log(error);
    }

    if (!searchWord) {
      setFilteredData([]);
      return;
    }

    const newFilter = data.filter((value) => {
      return value.corporation.includes(searchWord);
    });

    setFilteredData(newFilter);
  };
  console.log("resData1", resData[0]._id);

  return (
    <div className={classes.container}>
      <input type="text" placeholder={placeholder} onChange={handleFilter} />
      <div className={classes.search}></div>
      {filteredData.length !== 0 &&
        (console.log("filteredData", filteredData),
        (
          <div className={classes.data_result}>
            {filteredData.map((value, key) => (
              <div key={key}>
                <Link to={`/popups/search/${resData[0]._id}`}>
                  {/* resData를 사용 */}
                  <p>{value.corporation}</p>
                </Link>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default SearchBar;
