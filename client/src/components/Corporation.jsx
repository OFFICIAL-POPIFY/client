import React, { useState, useEffect } from "react";
import axios from "../api/axios";

function Corporation() {
  const id = window.location.pathname.split("/")[3];
  const CORPORATION_URL = `${process.env.REACT_APP_BASE_URL}/popups/search/${id}`;
  const [corporationData, setCorporationData] = useState([]);

  useEffect(() => {
    axios
      .get(CORPORATION_URL)
      .then((response) => {
        console.log(response.data);
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
