import "../../index.css";
import "../../App.css";

import { AiOutlineArrowRight } from "react-icons/ai";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function MypageExtendModal({ content, extendCount, isOpen }) {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]">
      <div className="w-full h-full bg-black opacity-50"></div>
      <div className="absolute max-w-[300px] w-[80%] min-h-[250px] h-[20%] bg-white shadow-xl flex flex-col justify-between rounded-3xl">
        <h1
          className="semibold flex column justify-center items-center h-full bg-gray3 rounded-t-3xl text-base"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {content}
          <div
            className="medium flex mt-2 pl-4 text-sm"
            style={{ marginTop: "20px" }}
          >
            <div className="medium mx-2 text-gray-500">
              <h5>연장횟수</h5>
            </div>
            <div className="medium mx-4">
              <h5>
                <span className="text-blue-700">{extendCount}</span> / 2
              </h5>
            </div>
          </div>
          <div className="medium mx-2 text-gray-500 text-sm mt-4">
            <h5>종료시간 변경</h5>
          </div>
          <div
            className="w-1/2 h-1/6 bg-gray2 rounded-3xl mt-1 flex items-center medium px-2"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            17:00
            <AiOutlineArrowRight size="14px" />
            <span className="text-blue-700">17:30</span>
          </div>
        </h1>

        <div className="w-full h-1/5 flex justify-between items-center">
          <button
            onClick={() => isOpen(false)}
            className="w-1/2 h-full text-center"
          >
            아니오
          </button>
          <button
            onClick={() => isOpen(false)}
            className="w-1/2 h-full text-center bg-[#0D51FF] rounded-br-3xl text-white "
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
}
