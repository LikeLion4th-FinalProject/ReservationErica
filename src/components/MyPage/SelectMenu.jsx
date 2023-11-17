import "../../index.css";
import "../../App.css";

import Icon1 from "../../static/scroll-text.svg";
import Icon2 from "../../static/siren.svg";
import Image from "../../static/profile_image.png";

import { useNavigate } from "react-router-dom";

function SelectMenu() {
  const movePage = useNavigate();

  return (
    <div
      className="bg-gray3 text-gray-500 grid items-center grid-flow-col justify-stretch rounded-b-xl"
      style={{ fontSize: "14px" }}
    >
      <button
        className="flex items-center justify-center py-3 border-r border-gray-300"
        onClick={() => movePage("/mypage/before-reserve")}
      >
        <img
          src={Icon1}
          style={{
            width: "15px",
            height: "15px",
            marginRight: "5px",
          }}
        />
        <h1>이전 예약내역</h1>
      </button>
      <button
        className="flex items-center justify-center py-3 border-gray-300"
        onClick={() => movePage("/mypage/before-suggest")}
      >
        <img
          src={Icon2}
          style={{
            width: "15px",
            height: "15px",
            marginRight: "5px",
          }}
        />
        <h1>건의내역</h1>
      </button>
    </div>
  );
}

export default SelectMenu;
