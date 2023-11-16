import { RiAlarmWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import IndicatorSection2 from "./IndicatorSection2.jsx";
import SelectMenu2 from "./SelectMenu2.jsx";
import { createContext } from "react";
import { useState } from "react";
import hanyang from "../../static/mypage_hanyang.png";

import { searchMyReservation } from "../../api/mypage.js";

export const ReserveContext = createContext();

function MypageCard({ title }) {
  const [isReserve, setReserve] = useState(true); // true: 예약 후(이용 전/이용 후), false: 예약 전
  const [myData, setMyData] = useState(null);

  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

  const movePage = useNavigate();

  let before = true; // 예약 후 상태에서, 이용 전이면 true, 이용 중이면 false

  // 나중에 사용자의 예약 정보 연동해야 함
  return (
    <>
      {/* ReserveContext.Provider로 컨텍스트 제공 */}
      <ReserveContext.Provider value={setReserve}>
        <button
          onClick={() => {
            console.log("hihihi");
            searchMyReservation();
          }}
        >
          hi
        </button>
        {isReserve ? (
          <div className="border-[1px] rounded-t-2xl rounded-b-lg border-[1px] mb-9">
            <section className="w-full flex flex-col bg-gray4 rounded-t-2xl  py-3 ">
              <div className="justify-between items-center scroll-pr-32 pb-2 px-4">
                <div>
                  {before ? (
                    <div className="w-[50px] flex items-center p-1 px-2 border-solid border border-gray-300 text-gray-400 rounded-full bg-gray3 text-btn tracking-wider gap-1 justify-center">
                      <span>이용 전</span>
                    </div>
                  ) : (
                    <div className="flex items-center p-1 px-2 mx-2 border-solid border border-blue-500 text-blue-500 rounded-full bg-gray3 text-btn tracking-wider gap-1">
                      <span>이용 중</span>
                    </div>
                  )}
                </div>
                <h1 className="text-[24px] semibold mt-2">Smash 0</h1>
              </div>
              <div className="flex border-b-[8px] border-x-gray2">
                <div className="px-4">
                  <h5 className="text-[14px] text-gray-500">인원</h5>
                  <h5 className="text-[14px] text-gray-500">날짜</h5>
                  <h5 className="text-[14px] text-gray-500">연장횟수</h5>
                  <h5 className="text-[14px] text-gray-500 mb-[20px]">시간</h5>
                </div>
                <div style={{ marginLeft: "15px" }}>
                  <h5 className="medium" style={{ fontSize: "14px" }}>
                    3명
                  </h5>
                  <h5 className="medium" style={{ fontSize: "14px" }}>
                    2023-09-26
                  </h5>
                  <h5 className="medium" style={{ fontSize: "14px" }}>
                    0/2
                  </h5>
                  <h5 className="medium" style={{ fontSize: "14px" }}>
                    15:00~17:00
                  </h5>
                </div>
              </div>
              <div
                className="px-4"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2
                  className="medium"
                  style={{ fontSize: "18px", marginTop: "10px" }}
                >
                  예약 현황
                </h2>
                <IndicatorSection2 />
              </div>

              <section className="grid grid-cols-7 grid-rows-2 mt-2 gap-1 mb-6 px-4">
                {hours.map((hour, index) => (
                  <div key={index} className="flex flex-col">
                    <div style={{}}>
                      <span className="text-[8px] mb-1">{hour}</span>
                      <span className="text-[8px] mb-1">{hour + 1}</span>
                    </div>

                    <div className="flex gap-[1px]">
                      <div
                        className={`w-[25px] h-[15px] bg-gray-200 ${
                          index === 0 || index === 7
                            ? "rounded-tl-md rounded-bl-md"
                            : ""
                        }`}
                      />
                      <div
                        className={`w-[25px] h-[15px] bg-gray-200 ${
                          index === 6 || index === hours.length - 1
                            ? "rounded-tr-md rounded-br-md"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </section>
            </section>
            <SelectMenu2 />
          </div>
        ) : (
          <div className="w-full flex flex-col bg-gray4 border-[1px] rounded-t-2xl rounded-b-2xl border-[1px] mt-28">
            <section
              className="w-full flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl px-4 py-16 text-gray1"
              style={{ position: "relative" }}
            >
              <img
                src={hanyang}
                style={{
                  position: "absolute",
                  width: "170px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -110%)",
                }}
              />
              <p style={{ display: "flex", justifyContent: "center" }}>
                현재 이용 및 예약 현황이 없어요!
              </p>
            </section>
          </div>
        )}
      </ReserveContext.Provider>
    </>
  );
}

export default MypageCard;
