import React, { useContext } from "react";
import { ReserveContext } from "./MypageCard";

export default function MypageCancelModal({
  content1,
  content2,
  isOpen,
  setFormValid,
}) {
  const setReserve = useContext(ReserveContext); // ReserveContext에서 setReserve 가져오기

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]">
      <div className="w-full h-full bg-black opacity-50"></div>
      <div className="absolute max-w-[300px] w-[80%] min-h-[150px] h-[20%] bg-white shadow-xl flex flex-col justify-between rounded-3xl">
        <h1 className="semibold flex justify-center items-center h-full bg-gray3 rounded-t-3xl text-base">
          &nbsp;&nbsp;&nbsp;{content1} <br /> {content2}
        </h1>
        <div className="w-full h-1/3 flex justify-between items-center">
          <button
            onClick={() => isOpen(false)}
            className="w-1/2 h-full text-center"
          >
            아니오
          </button>
          <button
            onClick={() => {
              setReserve(false); // reserve 값을 true로 변경
              setFormValid(false);
            }}
            className="w-1/2 h-full text-center bg-myblue rounded-br-3xl text-white "
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
}
