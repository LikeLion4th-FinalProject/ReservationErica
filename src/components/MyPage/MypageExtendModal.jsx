import '../../index.css';
import '../../App.css';

import { AiOutlineArrowRight } from 'react-icons/ai';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { reserveTime } from '../../styles/static';
import { extendReservation } from '../../api/mypage';
import ConfirmModal from '../modal/ConfirmModal';

export default function MypageExtendModal({
  content,
  extendCount,
  isOpen,
  reserveInfo,
  end,
  end2,
}) {
  const [nextTimeReserve, setNextTimeReserve] = useState(true);
  let extendPossible = true;
  if (end === 25) extendPossible = false;

  const handleExtend = async () => {
    // console.log(reserveInfo);
    const tmp = await extendReservation(
      reserveInfo.room_name,
      reserveInfo.date
    );
    console.log(tmp);
    setNextTimeReserve(tmp);
    if (tmp) {
      isOpen(false);
      window.location.reload();
    }
  };
  console.log(nextTimeReserve);

  return (
    <>
      <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]'>
        <div className='w-full h-full bg-black opacity-50'></div>
        <div className='absolute max-w-[300px] w-[80%] min-h-[240px] h-[20%] bg-white shadow-xl flex flex-col justify-between rounded-3xl'>
          <h1 className='font-bold flex flex-col justify-center items-center h-full bg-gray3 rounded-t-3xl text-base'>
            {!extendPossible ? (
              <p className='text-center'>
                연장 가능한 시간은 <br />
                오후 10시 까지입니다!
              </p>
            ) : extendCount === 0 ? (
              <p className='text-center'>연장은 최대 2회까지 가능합니다!</p>
            ) : (
              <>
                {content}
                <div
                  className='medium flex mt-2 pl-4 text-sm'
                  style={{ marginTop: '20px' }}
                >
                  <div className='medium mx-2 text-gray-500'>
                    <h5>연장횟수</h5>
                  </div>
                  <div className='medium mx-4'>
                    <h5>
                      <span className='text-myblue'>{2 - extendCount}</span> / 2
                    </h5>
                  </div>
                </div>
                <div className='medium mx-2 text-gray-500 text-sm mt-4'>
                  <h5>종료시간 변경</h5>
                </div>
                <div
                  className='w-1/2 h-1/6 bg-gray2 rounded-3xl mt-1 flex items-center medium px-2'
                  style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                  {reserveTime[end + 1]}
                  <AiOutlineArrowRight size='14px' />
                  <span className='text-myblue'>{reserveTime[end2 + 1]}</span>
                </div>
              </>
            )}
          </h1>
          <div className='w-full h-1/5 flex justify-between items-center'>
            {extendCount === 0 ? (
              <button
                onClick={() => isOpen(false)}
                className={
                  'w-full bg-myblue rounded-b-3xl text-white h-full text-center'
                }
              >
                닫기
              </button>
            ) : (
              <>
                <button
                  onClick={() => isOpen(false)}
                  className={`${
                    !extendPossible
                      ? 'w-full bg-myblue rounded-b-3xl text-white'
                      : 'w-1/2'
                  } h-full text-center`}
                >
                  {!extendPossible ? '닫기' : '아니오'}
                </button>
                {extendPossible && (
                  <button
                    onClick={() => handleExtend()}
                    className='w-1/2 h-full text-center bg-myblue rounded-br-3xl text-white '
                  >
                    예
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {!nextTimeReserve && (
        <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]'>
          <div className='w-full h-full bg-black opacity-50'></div>
          <div className='absolute max-w-[400px] w-[80%] min-h-[240px] bg-gray3 flex flex-col justify-between rounded-3xl'>
            <div></div>
            <h1 className='text-center font-bold text-lg'>
              해당 시간의 예약내역이 존재하여 <br />
              연장이 불가능합니다
            </h1>
            <div className='w-full flex justify-between items-center'>
              <button
                onClick={() => {
                  setNextTimeReserve(true);
                  isOpen(false);
                }}
                className='w-full h-1/5 text-center py-4 bg-myblue text-white rounded-b-3xl'
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
