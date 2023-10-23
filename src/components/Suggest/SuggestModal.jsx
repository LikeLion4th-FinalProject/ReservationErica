import "../../index.css";
import "../../App.css";

import { useNavigate } from "react-router-dom";

export default function SuggestModal({
  content1,
  content2,
  content3,
  content4,
  isOpen,
}) {
  const movePage = useNavigate();

  function gomypage() {
    movePage("/mypage/0");
  }

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]">
      <div className="w-full h-full bg-black opacity-50"></div>
      <div className="absolute max-w-[300px] w-[80%] h-[30%] bg-white shadow-xl flex flex-col justify-between rounded-3xl">
        <h1
          className="semibold justify-center items-center h-full bg-gray3 rounded-t-3xl"
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "17px",
          }}
        >
          {content1}
          <div
            className="medium flex mt-2 pl-4 text-sm"
            style={{ marginTop: "20px" }}
          >
            <div className="medium mx-2 text-gray-500">
              <h5>장소</h5>
              <h5>날짜</h5>
              <h5>건의사유</h5>
            </div>
            <div className="medium mx-4">
              <h5>{content2}</h5>
              <h5>{content3}</h5>
              <h5>{content4}</h5>
            </div>
          </div>
        </h1>

        <div className="w-full h-1/4 flex justify-between items-center">
          <button
            onClick={() => isOpen(false)}
            className="w-1/2 h-full text-center"
          >
            아니오
          </button>
          <button
            onClick={() => isOpen(false)}
            className="w-1/2 h-full text-center bg-[#0D51FF] rounded-br-3xl text-white "
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
}
