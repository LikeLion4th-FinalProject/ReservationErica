import "../../index.css";
import "../../App.css";

import Icon1 from "../../static/icon1.png";
import Icon2 from "../../static/icon2.png";
import Icon3 from "../../static/icon3.png";
import Image from "../../static/profile_image.png";

import { useNavigate } from "react-router-dom";

function SelectMenu() {
  const movePage = useNavigate();

  function gobeforereserve() {
    movePage("/mypage/before-reserve");
  }

  function gobeforesuggest() {
    movePage("/mypage/before-suggest");
  }

  return (
    <div
      className="bg-gray3 flex items-center grid grid-flow-col justify-stretch rounded-b-xl rounded-b-lg"
      style={{ fontSize: "14px" }}
    >
      <button
        className="flex items-center justify-center py-3 border-r border-gray-300"
        onClick={gobeforereserve}
      >
        <img
          src={Icon1}
          style={{ width: "15px", height: "15px", marginRight: "5px" }}
        />
        <h1>이전 예약내역</h1>
      </button>
      <button
        className="flex items-center justify-center py-3 border-gray-300"
        onClick={gobeforesuggest}
      >
        <img
          src={Icon2}
          style={{ width: "15px", height: "15px", marginRight: "5px" }}
        />
        <h1>건의내역</h1>
      </button>
      {/* <button className="flex items-center justify-center">
        <img
          src={Icon3}
          style={{ width: "15px", height: "15px", marginRight: "5px" }}
        />
        <h1>제재내역</h1>
      </button> */}
    </div>
  );
}

export default SelectMenu;
