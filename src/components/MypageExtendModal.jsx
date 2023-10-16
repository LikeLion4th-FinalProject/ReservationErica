import "../index.css";
import "../App.css";

import React from "react";
import { useNavigate } from "react-router-dom";

export default function MypageCancelModal({ content, extendCount, isOpen }) {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]">
      <div className="w-full h-full bg-black opacity-50"></div>
      <div className="absolute max-w-[400px] w-[80%] min-h-[150px] h-[20%] bg-white shadow-xl flex flex-col justify-between rounded-3xl">
        <h1 className="flex justify-center items-center h-full bg-gray3 rounded-t-3xl">
          {content}
        </h1>

        <div className="w-full h-1/3 flex justify-between items-center">
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
