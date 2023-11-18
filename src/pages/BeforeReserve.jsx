import "../index.css";
import "../App.css";

import React from "react";
import { client } from "../api/client";

function BeforeReserve() {
  // const userID = sessionStorage.getItem('kakao_id');

  const test = client
    .get("reservationlist/1/")
    // .get({`reservationlist/${userID}/`})
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));

  // console.log(test);

  return (
    <div className="px-6">
      <p
        className="semibold"
        style={{
          fontSize: "18px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        이전 예약내역
      </p>
    </div>
  );
}

export default BeforeReserve;
