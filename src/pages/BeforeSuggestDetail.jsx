import React from "react";

import "../index.css";
import "../App.css";
import SuggestProgress1 from "../components/BeforeSuggestDetail/SuggestProgress1";
import SuggestProgress2 from "../components/BeforeSuggestDetail/SuggestProgress2";
import SuggestProgress3 from "../components/BeforeSuggestDetail/SuggestProgress3";

// tt: 확인 전, ft: 처리 중, ff: 처리 완료
let nocheck_suggest = false;
let nofinish_suggest = false;

function BeforeSuggestDetail() {
  return (
    <div>
      <div
        className="px-6"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {nocheck_suggest ? (
          <SuggestProgress1 />
        ) : nofinish_suggest ? (
          <SuggestProgress2 />
        ) : (
          <SuggestProgress3 />
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="semibold pl-6"
          style={{
            fontSize: "18px",
            marginBottom: "20px",
            marginTop: "30px",
            marginRight: "10px",
          }}
        >
          건의내역
        </p>
        {nocheck_suggest ? (
          <div className="w-12 items-center text-center p-1 border-solid text-gray-400 rounded-full bg-gray3 text-btn tracking-wider gap-1 mt-2.5">
            <span>확인 전</span>
          </div>
        ) : nofinish_suggest ? (
          <div className="w-12 items-center text-center p-1 border-solid text-orange-400 rounded-full bg-gray3 text-btn tracking-wider gap-1 mt-2.5">
            <span>처리 중</span>
          </div>
        ) : (
          <div className="w-14 items-center text-center p-1 border-solid text-blue-400 rounded-full bg-gray3 text-btn tracking-wider gap-1 mt-2.5">
            <span>처리 완료</span>
          </div>
        )}
      </div>
      <div
        className="w-full h-24"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#F7F7F7",
          marginBottom: "35px",
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
      <div className="px-6 pb-8 mb-20">
        <div
          className="w-full h-12 mb-4 rounded-2xl px-4"
          style={{
            backgroundColor: "#F7F7F7",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>건의사유 1</p>
        </div>
        <div
          className="w-full h-40 rounded-2xl px-4"
          style={{ backgroundColor: "#F7F7F7", display: "flex" }}
        >
          <section className="py-4">
            <p style={{ display: "flex", justifyContent: "center" }}>
              어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구
              저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BeforeSuggestDetail;
