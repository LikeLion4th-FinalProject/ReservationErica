import { useEffect, useState } from "react";
import MypageCancelModal from "./MypageCancelModal";
import MypageExtendModal from "./MypageCancelModal";
import "../../index.css";
import "../../App.css";
import { render } from "react-dom";

function SelectMenu2() {
  const [isCancelModalOpen, setCancelModalOpen] = useState(false);
  const [isExtendModalOpen, setExtendModalOpen] = useState(false);

  return (
    <div
      className="bg-gray3 flex items-center grid grid-flow-col justify-stretch rounded-b-lg"
      style={{ fontSize: "14px" }}
    >
      {Button()}
      {isCancelModalOpen && (
        <MypageCancelModal
          content={`이용 및 예약을 취소하시겠습니까?`}
          isOpen={setCancelModalOpen}
        />
      )}
      {isExtendModalOpen && (
        <MypageExtendModal
          content={`시간을 연장하시겠습니까?`}
          extendCount={2}
          isOpen={setExtendModalOpen}
        />
      )}
    </div>
  );

  function Button() {
    const [isFormValid, setFormValid] = useState(true);

    if (isFormValid) {
      return (
        <>
          <button
            onClick={() => setCancelModalOpen(true)}
            className="flex items-center justify-center py-3 border-r border-gray-300"
          >
            <h1>취소하기</h1>
          </button>
          <button
            onClick={() => setExtendModalOpen(true)}
            className="flex items-center justify-center py-3 text-white bg-gray0 rounded-br-lg border-gray-300 border-b border-gray0"
          >
            <h1>연장하기</h1>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="flex items-center justify-center py-3 border-r border-gray-300">
            <h1>취소하기</h1>
          </button>
          <button className="flex items-center justify-center py-3 text-white bg-gray0 rounded-br-lg border-gray-300 border-b border-gray0">
            <h1>연장하기</h1>
          </button>
        </>
      );
    }
  }
}

export default SelectMenu2;
