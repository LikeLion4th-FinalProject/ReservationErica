import { useNavigate } from "react-router-dom";

import "../../index.css";
import "../../App.css";

import { IoIosArrowForward } from "react-icons/io";

// tt: 확인 전, ft: 처리 중, ff: 처리 완료
let nocheck_suggest = false;
let nofinish_suggest = false;

function SuggestCard() {
  const movePage = useNavigate();

  function godetailsuggest() {
    movePage("/mypage/before-suggest-detail");
  }

  return (
    <div className="w-full flex flex-col bg-gray4 border-[1px] rounded-t-2xl rounded-b-2xl">
      <section className="w-full h-36 flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl px-4 py-3">
        {nocheck_suggest ? (
          <div className="w-12 items-center text-center p-1 border-solid text-gray-400 rounded-full bg-gray3 text-btn tracking-wider gap-1">
            <span>확인 전</span>
          </div>
        ) : nofinish_suggest ? (
          <div className="w-12 items-center text-center p-1 border-solid text-myorange rounded-full bg-gray3 text-btn tracking-wider gap-1">
            <span>처리 중</span>
          </div>
        ) : (
          <div className="w-14 items-center text-center p-1 border-solid text-myblue rounded-full bg-gray3 text-btn tracking-wider gap-1">
            <span>처리 완료</span>
          </div>
        )}

        <h1 className="semibold text-2xl">Smash 1</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <h2 className="text-sm" style={{ color: "gray" }}>
              날짜
            </h2>
            <h2 className="text-sm" style={{ color: "gray" }}>
              건의사유
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <h2 className="text-sm">2023-09-20</h2>
            <h2 className="text-sm">건의사유3</h2>
          </div>
          <div
            style={{
              display: "flex",
              width: "57%",
              marginTop: "42px",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <button
              style={{
                width: "80px",
                display: "flex",
                justifyContent: "flex-end",
              }}
              onClick={godetailsuggest}
            >
              <h2 className="text-xs" style={{ color: "gray" }}>
                세부내용보기
              </h2>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuggestCard;
