import "../index.css";
import "../App.css";

import React, { useState } from "react";

import Profile from "../components/MyPage/Profile";
import PlaceCard from "../components/PlaceCard.jsx";

import MypageCard from "../components/MyPage/MypageCard";
import SelectMenu2 from "../components/MyPage/SelectMenu2";
import MypageCancelModal from "../components/MyPage/MypageCancelModal";

function MyPage() {
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
      <MypageCard />
    </div>
  );
}

export default MyPage;
