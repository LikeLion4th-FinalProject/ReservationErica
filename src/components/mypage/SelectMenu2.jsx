import React from 'react';
import { render } from 'react-dom';
import { useEffect, useState } from 'react';
import MypageCancelModal from './MypageCancelModal.jsx';
import MypageExtendModal from './MypageExtendModal.jsx';
import '../../index.css';
import '../../App.css';
import { searchMyReservation } from '../../api/reservation.js';

function SelectMenu2({ reserveInfo }) {
  const [isCancelModalOpen, setCancelModalOpen] = useState(false);
  const [isExtendModalOpen, setExtendModalOpen] = useState(false);
  const [extensionNum, setExtensionNum] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    timeTableHandler();
  }, []);

  async function timeTableHandler() {
    const date = await searchMyReservation();
    setExtensionNum(date.extension);
    setEndTime(date.end);

    // console.log('마이페이지 데이터 조회', date);
  }

  let extension = extensionNum;
  let end = (endTime + 19) / 2;
  let end2 = end + 0.5;

  if (end % 1 === 0.5) {
    end = `${Math.floor(end)}:30`;
  } else {
    end = `${Math.floor(end)}:00`;
  }

  if (end2 % 1 === 0.5) {
    end2 = `${Math.floor(end2)}:30`;
  } else {
    end2 = `${Math.floor(end2)}:00`;
  }

  return (
    <>
      <div
        className='bg-gray3 items-center grid grid-flow-col justify-stretch rounded-b-2xl'
        style={{ fontSize: '14px' }}
      >
        <button
          onClick={() => setCancelModalOpen(true)}
          className='flex items-center justify-center py-3 rounded-br-2xl border-gray-300'
        >
          <h1>취소하기</h1>
        </button>
        <button
          onClick={() => setExtendModalOpen(true)}
          className='flex items-center justify-center py-3 text-white bg-myblue rounded-br-2xl'
        >
          <h1>연장하기</h1>
        </button>
        {isCancelModalOpen && (
          <MypageCancelModal
            content1={`이용 및 예약을`}
            content2={`취소하시겠습니까?`}
            isOpen={setCancelModalOpen}
            reserveInfo={reserveInfo}
          />
        )}

        {isExtendModalOpen && (
          <MypageExtendModal
            content={`시간을 연장하시겠습니까?`}
            extendCount={extension}
            isOpen={setExtendModalOpen}
            end={end}
            end2={end2}
          />
        )}
      </div>
    </>
  );
}

export default SelectMenu2;
