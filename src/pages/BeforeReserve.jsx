import "../index.css";
import "../App.css";

import React from "react";

function BeforeReserve() {
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
