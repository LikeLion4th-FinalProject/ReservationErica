import React from 'react';
import { render } from 'react-dom';
import { useEffect, useState } from 'react';
import MypageCancelModal from './MypageCancelModal';
import MypageExtendModal from './MypageExtendModal';
import '../../index.css';
import '../../App.css';
import { searchMyReservation } from '../../api/reservation.js';

function SelectMenu2({ reserveInfo }) {
  const [isCancelModalOpen, setCancelModalOpen] = useState(false);
  const [isExtendModalOpen, setExtendModalOpen] = useState(false);

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
            extendCount={reserveInfo.reservations.extension}
            isOpen={setExtendModalOpen}
            end={reserveInfo.reservations.end}
            end2={reserveInfo.reservations.end + 1}
          />
        )}
      </div>
    </>
  );
}

export default SelectMenu2;
