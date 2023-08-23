import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

function Corporation() {
  const { storeId } = useParams();
  const CORPORATION_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${storeId}`;
  const [corporationData, setCorporationData] = useState([]);
  console.log("스토어아이디", storeId);

  useEffect(() => {
    axios
      .get(CORPORATION_URL)
      .then((response) => {
        console.log("기업", response.data);
        setCorporationData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CORPORATION_URL]);

  console.log(corporationData);

  const corporationItems = corporationData.map((corporation, index) => (
    <div key={index} className="card">
      <h3>{corporation.corporation}</h3>
      <p>{corporation.location}</p>
      <p>{corporation.date}</p>
      <p>{corporation.time}</p>
    </div>
  ));

  return (
    <div>
      <h1>POP-UP STORE</h1>
      <hr />
      {corporationItems}
    </div>
  );
}

export default Corporation;
