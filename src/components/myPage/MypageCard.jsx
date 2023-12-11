import { RiAlarmWarningLine } from "react-icons/ri";
import { redirect, useNavigate } from "react-router-dom";

import IndicatorSection2 from "./IndicatorSection2.jsx";
import SelectMenu2 from "./SelectMenu2.jsx";
import { createContext } from "react";
import { useState, useEffect } from "react";
import hanyang from "../../static/mypage_hanyang.png";
import { getMyReservation } from "../../api/mypage.js";
import { reserveTime } from "../../styles/static.js";
import {
  compareReserveTime,
  requestDate,
} from "../../utils/requestDateInfo.js";

export const ReserveContext = createContext();

function MypageCard({ title }) {
  const [isReserve, setReserve] = useState(false); // true: 예약 후(이용 전/이용 후), false: 예약 전
  const [reserveInfo, setReserveInfo] = useState({});
  const [prevRes, setPrevRes] = useState("");
  const [isBeforeUse, setBeforeUse] = useState(false);

  const timeTableHandler = async () => {
    const date = await getMyReservation();
    if (!date) setReserve(false);
    else {
      setReserve(true);
      setReserveInfo(date); // 예약 내역이 있을 경우 예약내역을 담아두는 코드
      setPrevRes(date.daytimetable[0].timetable);
      setBeforeUse(
        compareReserveTime(date.reservations.date, date.reservations.start)
      );
    }
    console.log("마이페이지 데이터 조회", date);
  };

  useEffect(() => {
    console.log("useEffect 실행..");
    timeTableHandler();
  }, [sessionStorage.getItem("token")]);

  // useEffect(() => {
  //   console.log('연장돼서 useeffect 실행');
  // }, [reserveInfo.reservations.extension]);

  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

<<<<<<< HEAD
  /** todo
   * 1. before 값을 받아온 데이터로 관리하기 - [하준] 진행예정
   * 2. 연장하기 API 연동하기 (마이페이지의 연장횟수 관리하는것도) - [지수님] 진행예정
   * 3. '/' 로 갔을 때, 이미 로그인이 유효한 사용자는 바로 'reservation'으로 가게끔? - [종문님] 진행예정
   * 4. 예약현황 옆에 안내 띠(?) 수정하기
   *
   * 의논사항
   * 1. 인원 어떻게할건지? - 해결 완료
   * 2. 마이페이지 학번, 학과, 프사 어케할거임? - 해결 예정
   */
  let before = false; // 예약 후 상태에서, 이용 전이면 true, 이용 중이면 false

  const todayDate = requestDate(); // 오늘 날짜 = 요청 보내는 날짜
  console.log("오늘 날짜", todayDate);
  const reserveDate = reserveInfo.reservations; // 예약 날짜
  console.log("예약 날짜", reserveDate);

=======
>>>>>>> 94e4ae3e7a7bb3241680b7fa2718a59d062f1760
  return (
    <>
      {/* ReserveContext.Provider로 컨텍스트 제공 */}
      <ReserveContext.Provider value={setReserve}>
        {!isReserve && !reserveInfo ? (
          <>로딩중임ㅇㅇ</>
        ) : (
          <>
            {isReserve && reserveInfo ? (
              <div className="rounded-t-2xl rounded-b-2xl mb-9">
                <section className="w-full flex flex-col bg-gray4 rounded-t-2xl  py-3 ">
                  <div className="justify-between items-center scroll-pr-32 pb-2 px-4">
                    <div>
                      {isBeforeUse ? (
                        <div className="w-[50px] flex items-center p-1 px-2 border-solid border border-gray-300 text-gray-400 rounded-full bg-gray4 text-btn tracking-wider gap-1 justify-center">
                          <span>이용 전</span>
                        </div>
                      ) : (
                        <div className="w-[50px] flex items-center p-1 px-2 border-solid border border-myblue text-myblue rounded-full bg-gray4 text-btn tracking-wider gap-1 justify-center">
                          <span>이용 중</span>
                        </div>
                      )}
                    </div>
                    <h1 className="text-[24px] semibold mt-2">
                      {reserveInfo.reservations.room_name}
                    </h1>
                  </div>
                  <div className="flex border-b-[8px] border-x-gray2">
                    <div className="px-4">
                      {/* <h5 className='text-[14px] text-gray-500'>인원</h5> */}
                      <h5 className="text-[14px] text-gray-500">날짜</h5>
                      <h5 className="text-[14px] text-gray-500">연장횟수</h5>
                      <h5 className="text-[14px] text-gray-500 mb-[20px]">
                        시간
                      </h5>
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                      {/* <h5 className='medium' style={{ fontSize: '14px' }}>
                      {reserveInfo.reservations.people_num}명
                    </h5> */}
                      <h5 className="medium" style={{ fontSize: "14px" }}>
                        {reserveInfo.reservations.date}
                      </h5>
                      <h5 className="medium" style={{ fontSize: "14px" }}>
                        <span className="text-myblue">
                          {2 - reserveInfo.reservations.extension}
                        </span>
                        /2
                      </h5>
                      <h5 className="medium" style={{ fontSize: "14px" }}>
                        {reserveTime[reserveInfo.reservations.start]} ~{" "}
                        {reserveTime[reserveInfo.reservations.end + 1]}
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
                      // console.log(timeTable);
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
<<<<<<< HEAD
                                evenArray[index] === "1" // 다른 사람이 사용 중, 즉 예약 중
                                  ? "bg-gray-400"
                                  : "bg-myorange"
=======
                                evenArray[index] === '1' // 다른 사람이 사용 중, 즉 예약 중
                                  ? 'bg-myblue'
                                  : 'bg-myorange'
>>>>>>> 94e4ae3e7a7bb3241680b7fa2718a59d062f1760
                              } `}
                            />
                            <div
                              className={`w-[25px] h-[15px] ${
                                index === 6 || index === hours.length - 1
                                  ? "rounded-tr-md rounded-br-md"
                                  : ""
                              } ${
<<<<<<< HEAD
                                oddArray[index] === "1" // 다른 사람이 사용 중, 즉 예약 중
                                  ? "bg-gray-400"
                                  : "bg-myorange"
=======
                                oddArray[index] === '1' // 다른 사람이 사용 중, 즉 예약 중
                                  ? 'bg-myblue'
                                  : 'bg-myorange'
>>>>>>> 94e4ae3e7a7bb3241680b7fa2718a59d062f1760
                              } `}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </section>
                </section>
                <SelectMenu2 reserveInfo={reserveInfo} />
              </div>
            ) : (
              <div className="w-full flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl mt-28">
                <section
                  className="w-full flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl px-4 py-16 text-gray1"
                  style={{ position: "relative" }}
                >
                  <img
                    src={hanyang}
                    style={{ transform: "translate(-50%, -110%)" }}
                    className="absolute w-[170px] top-1/2 left-1/2 trans"
                  />
                  <p style={{ display: "flex", justifyContent: "center" }}>
                    현재 이용 및 예약 현황이 없어요!
                  </p>
                </section>
              </div>
            )}
          </>
        )}
      </ReserveContext.Provider>
    </>
  );
}

export default MypageCard;
