import "../index.css";
import "../App.css";

import React from "react";
import { useState } from "react";

import SuggestDropdown from "../components/Suggest/SuggestDropdown";

function Suggest() {
  const [selectedSuggest, setSelectedSuggest] = useState(null);

  return (
    <div>
      <p
        className="semibold px-6"
        style={{
          fontSize: "18px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        건의하기
      </p>
      <div
        className="w-full h-24"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#F7F7F7",
          marginBottom: "25px",
        }}
      >
        <h1 className="text-xl semibold pl-6">Smash 1</h1>
        <div className="flex mt-2 pl-4 text-sm">
          <div className="mx-2 text-gray-500">
            <h5>날짜</h5>
            <h5>시간</h5>
          </div>
          <div className="mx-1">
            <h5>2023-09-20</h5>
            <h5>14:20</h5>
          </div>
        </div>
      </div>
      <SuggestDropdown
        onSuggestSelect={setSelectedSuggest}
        selectedSuggest={selectedSuggest}
      />
      {/* 여기 인풋 박스 디자인 */}
    </div>
  );
}

export default Suggest;
