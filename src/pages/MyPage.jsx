import "../index.css";
import "../App.css";

import React, { useState } from "react";

import Profile from "../components/MyPage/Profile";
import PlaceCard from "../components/PlaceCard.jsx";
import MypageCard from "../components/MyPage/MypageCard";

function MyPage() {
  const [reserve, setReserve] = useState(false); // true: 예약 전, false: 예약 후(이용 전, 이용 후)

  {
    /* Mypage.jsx의 reserve 값 바꾸기 (해결 못 함)
      MypageCancelModal -> SelectMenu2 -> MypageCard -> Mypage로 전달하려고 시도... */
  }
  const handleCancelButtonClick = () => {
    setReserve(true);
  };

  return (
    <div className="px-4 rounded-b-lg rounded-2xl">
      <Profile />
      <div>
        <p
          className="semibold"
          style={{ fontSize: "18px", marginBottom: "10px" }}
        >
          이용 및 예약 현황
        </p>
      </div>
      {reserve ? (
        <div className="w-full flex flex-col bg-gray4 border-[1px] rounded-t-2xl rounded-b-2xl border-[1px] mb-80">
          <section className="w-full flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl px-4 py-20 text-gray1">
            <p style={{ display: "flex", justifyContent: "center" }}>
              현재 이용 및 예약 현황이 없습니다.
            </p>
          </section>
        </div>
      ) : (
        <MypageCard handleCancelButtonClick={handleCancelButtonClick} />
      )}
    </div>
  );
}

export default MyPage;
