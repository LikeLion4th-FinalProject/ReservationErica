import "../index.css";
import "../App.css";

import React from "react";
import { useState } from "react";

import SuggestDropdown from "../components/Suggest/SuggestDropdown";

function Suggest() {
  const [selectedSuggest, setSelectedSuggest] = useState(null);

  // textarea 최대 글자수 제한
  const [text, setText] = useState("");
  const maxLength = 200;

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  // textarea 입력 여부에 따라 버튼 색상 결정
  const buttonColor = text.length > 0 ? "#0D51FF" : "#CCCCCC";

  // textarea 입력 여부에 따라 버튼 활성화/비활성화 결정
  const isButtonDisabled = text.length === 0;

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
      <div className="px-5">
        <textarea
          className="rounded-2xl bg-gray4 text-sm"
          placeholder="자세한 내용을 적어주세요"
          value={text}
          onChange={handleChange}
          style={{
            width: "100%",
            height: "180px",
            marginTop: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "14px",
            paddingRight: "14px",
            wordBreak: "break-all",
            wordWrap: "break-word",
          }}
        ></textarea>
        <div
          className="text-xs text-gray-400"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "5px",
          }}
        >
          <p>{`${text.length}/${maxLength}`}</p>
        </div>
      </div>
      <button
        disabled={isButtonDisabled}
        className={`fixed bottom-0 w-full h-16 flex justify-around items-center ${
          isButtonDisabled ? "bg-gray-300" : "bg-blue-600"
        }`}
        style={{ zIndex: 9999 }}
      >
        <p className={`${isButtonDisabled ? "text-gray-500" : "text-white"}`}>
          건의하기
        </p>
      </button>
    </div>
  );
}

export default Suggest;
