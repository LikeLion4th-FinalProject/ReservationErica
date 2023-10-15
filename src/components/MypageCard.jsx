import { RiAlarmWarningLine } from "react-icons/ri";
import IndicatorSection2 from "../components/IndicatorSection2.jsx";
import SelectMenu2 from "../components/SelectMenu2.jsx";

function MypageCard({ title }) {
  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

  let before = false; // 예약 후 상태에서, 이용 전이면 true, 이용 중이면 false

  return (
    <div className="border-[1px] rounded-t-2xl rounded-b-lg border-[1px] mb-20">
      <section className="w-full flex flex-col bg-gray4 rounded-t-2xl px-4 py-3 ">
        <div className="flex justify-between items-center scroll-pr-32 pb-2 border-b-[1px] border-gray1">
          <h1 className="text-lg semibold">SMASH 0</h1>
          <div className="flex">
            {/* <div className="flex items-center p-1 px-2 mx-2 border-solid border border-blue-500 text-blue-500 rounded-full bg-gray3 text-btn tracking-wider gap-1">
              <span>이용중</span>
            </div> */}
            {before ? (
              <div className="flex items-center p-1 px-2 mx-2 border-solid border border-gray-300 text-gray-400 rounded-full bg-gray3 text-btn tracking-wider gap-1">
                <span>이용 전</span>
              </div>
            ) : (
              <div className="flex items-center p-1 px-2 mx-2 border-solid border border-blue-500 text-blue-500 rounded-full bg-gray3 text-btn tracking-wider gap-1">
                <span>이용 중</span>
              </div>
            )}
            <button className="flex items-center p-1 px-2 rounded-full bg-gray3 text-btn text-red tracking-wider gap-1">
              <RiAlarmWarningLine size={12} />
              <span>건의하기</span>
            </button>
          </div>
        </div>
        <div className="flex border-b-[1px] border-gray1">
          <div>
            <h5
              className="medium"
              style={{ fontSize: "14px", color: "gray", marginTop: "10px" }}
            >
              인원
            </h5>
            <h5 className="medium" style={{ fontSize: "14px", color: "gray" }}>
              날짜
            </h5>
            <h5 className="medium" style={{ fontSize: "14px", color: "gray" }}>
              연장횟수
            </h5>
            <h5
              className="medium"
              style={{ fontSize: "14px", color: "gray", marginBottom: "10px" }}
            >
              시간
            </h5>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <h5
              className="medium"
              style={{ fontSize: "14px", marginTop: "10px" }}
            >
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
          <h2
            className="medium"
            style={{ fontSize: "10px", marginTop: "10px", color: "gray" }}
          >
            23-09-26 14:50 기준
          </h2>
        </div>
        <IndicatorSection2 />
        <section className="grid grid-cols-7 grid-rows-2 mt-2 gap-1 mb-6">
          {hours.map((hour, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-[8px] text-start mb-1">{hour}</span>
              <div className="flex gap-[1px]">
                <div className="w-[25px] h-[15px] bg-gray2" />
                <div className="w-[25px] h-[15px] bg-gray2" />
              </div>
            </div>
          ))}
        </section>
      </section>
      <SelectMenu2 />
    </div>
  );
}

export default MypageCard;
