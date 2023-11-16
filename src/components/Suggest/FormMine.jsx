import React, { createContext, useContext, useEffect, useState } from 'react';
import { SuggestForm } from './SuggestForm';
import { suggestForMyRoom } from '../../static/info';
import { reserveTime } from '../../styles/static';
import { feedback } from '../../pages/Suggest';

export default function FormMine({ myResInfo }) {
  const options = suggestForMyRoom;
  // console.log(myResInfo.reservations[0]);

  const roomName = myResInfo.room_name;
  const resDate = myResInfo.create_at.split('T')[0];
  const startTime = reserveTime[myResInfo.start];
  const endTime = reserveTime[myResInfo.end + 1];

  const { suggestInfo, setSuggestInfo } = useContext(feedback);
  useEffect(() => {
    setSuggestInfo({
      kakao_id: sessionStorage.getItem('kakao_id'),
      room_name: roomName,
    });
  }, []);

  return (
    <>
      {/* 여기에 예약한 내역 불러와서 뿌려주기 */}
      <div className='flex flex-col justify-center w-full h-24 bg-gray4 mb-6'>
        <h1 className='text-xl semibold pl-6'>{roomName}</h1>
        <div className='flex mt-2 pl-4 text-sm'>
          <div className='mx-2 text-gray-500'>
            <h5>날짜</h5>
            <h5>시간</h5>
          </div>
          <div className='mx-1'>
            <h5>{resDate}</h5>
            <h5>{`${startTime} ~ ${endTime}`}</h5>
          </div>
        </div>
      </div>
      <SuggestForm options={options} />
    </>
  );
}
