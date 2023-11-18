import { RiAlarmWarningLine } from "react-icons/ri";
import { redirect, useNavigate } from "react-router-dom";

import IndicatorSection2 from "./IndicatorSection2.jsx";
import SelectMenu2 from "./SelectMenu2.jsx";
import { createContext } from "react";
import { useState, useEffect } from "react";
import hanyang from "../../static/mypage_hanyang.png";

import { searchMyReservation } from "../../api/mypage.js";

export const ReserveContext = createContext();

function MypageCard({ title }) {
  const [isReserve, setReserve] = useState(true); // true: 예약 후(이용 전/이용 후), false: 예약 전
  const [myData, setMyData] = useState(null);

  const [prevRes, setPrevRes] = useState("");
  const [myRoom, setMyRoom] = useState("");
  const [peopleNum, setPeopleNum] = useState("");
  const [myDate, setMyDate] = useState("");
  const [extensionNum, setExtensionNum] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    timeTableHandler();
  }, []);

  async function timeTableHandler() {
    try {
      const date = await searchMyReservation();
      setPrevRes(date.daytimetable[0].timetable);
      setMyRoom(date.reservations.room_name);
      setPeopleNum(date.reservations.people_num);
      setMyDate(date.reservations.date);
      setExtensionNum(date.reservations.extension);
      setStartTime(date.reservations.start);
      setEndTime(date.reservations.end);

      console.log("마이페이지 데이터 조회", date);
    } catch {}
  }

  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

  const movePage = useNavigate();

  let before = false; // 예약 후 상태에서, 이용 전이면 true, 이용 중이면 false

  let room_name = myRoom;
  let people_num = peopleNum;
  let date = myDate;
  let extension = extensionNum;

  let start = startTime / 2 + 9;
  let end = (endTime + 19) / 2;

  if (start % 1 === 0.5) {
    start = `${Math.floor(start)}:30`;
  } else {
    start = `${Math.floor(start)}:00`;
  }

  if (end % 1 === 0.5) {
    end = `${Math.floor(end)}:30`;
  } else {
    end = `${Math.floor(end)}:00`;
  }

  return (
    <>
      {/* ReserveContext.Provider로 컨텍스트 제공 */}
      <ReserveContext.Provider value={setReserve}>
        {isReserve ? (
          <div className="rounded-t-2xl rounded-b-2xl mb-9">
            <section className="w-full flex flex-col bg-gray4 rounded-t-2xl  py-3 ">
              <div className="justify-between items-center scroll-pr-32 pb-2 px-4">
                <div>
                  {before ? (
                    <div className="w-[50px] flex items-center p-1 px-2 border-solid border border-gray-300 text-gray-400 rounded-full bg-gray4 text-btn tracking-wider gap-1 justify-center">
                      <span>이용 전</span>
                    </div>
                  ) : (
                    <div className="w-[50px] flex items-center p-1 px-2 border-solid border border-myblue text-myblue rounded-full bg-gray4 text-btn tracking-wider gap-1 justify-center">
                      <span>이용 중</span>
                    </div>
                  )}
                </div>
                <h1 className="text-[24px] semibold mt-2">{room_name}</h1>
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
                    {people_num}명
                  </h5>
                  <h5 className="medium" style={{ fontSize: "14px" }}>
                    {date}
                  </h5>
                  <h5 className="medium" style={{ fontSize: "14px" }}>
                    <span className="text-myblue">{extension}</span>/2
                  </h5>
                  <h5 className="medium" style={{ fontSize: "14px" }}>
                    {start} ~ {end}
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
                {hours.map((hour, index) => {
                  const timeTable = prevRes;
                  let evenArray = []; // x시 ~ x시 30분
                  let oddArray = []; // x시 30분 ~ x시

                  for (let i = 0; i < timeTable.length; i++) {
                    if (i % 2 === 0) {
                      // 짝수 번째 인덱스
                      evenArray.push(timeTable[i]);
                    } else {
                      // 홀수 번째 인덱스
                      oddArray.push(timeTable[i]);
                    }
                  }

                  return (
                    <div key={index} className="flex flex-col">
                      <div>
                        <span className="text-[8px] mb-1">{hour}</span>
                      </div>

                      <div className="flex gap-[1px]">
                        <div
                          className={`w-[25px] h-[15px] ${
                            index === 0 || index === 7
                              ? "rounded-tl-md rounded-bl-md"
                              : ""
                          } ${
                            evenArray[index] === "1" // 다른 사람이 사용 중, 즉 예약 중
                              ? "bg-gray-400"
                              : "bg-myorange"
                          } `}
                        />
                        <div
                          className={`w-[25px] h-[15px] ${
                            index === 6 || index === hours.length - 1
                              ? "rounded-tr-md rounded-br-md"
                              : ""
                          } ${
                            oddArray[index] === "1" // 다른 사람이 사용 중, 즉 예약 중
                              ? "bg-gray-400"
                              : "bg-myorange"
                          } `}
                        />
                      </div>
                    </div>
                  );
                })}
              </section>
            </section>
            <SelectMenu2 />
          </div>
        ) : (
          <div className="w-full flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl mt-28">
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
