import "../index.css";
import "../App.css";

import React from "react";

function Suggest() {
  return (
    <div className="px-6">
      <p
        className="semibold"
        style={{
          fontSize: "18px",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        건의내역
      </p>
      <div className="w-full flex flex-col bg-gray4 border-[1px] rounded-t-2xl rounded-b-2xl border-[1px]">
        <section className="w-full h-36 flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl px-4 py-14 text-gray1 items-center">
          <p
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            현재 6개월 간 건의내역이 없습니다.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Suggest;
