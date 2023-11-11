import React, { createContext, useState } from 'react';
import { SuggestForm } from './SuggestForm';
import { suggestForMyRoom } from '../../static/info';

export const feedback = createContext();

export default function FormMine() {
  const options = suggestForMyRoom;
  const [suggestInfo, setSuggestInfo] = useState([]);

  return (
    <>
      {/* 여기에 예약한 내역 불러와서 뿌려주기 */}
      <div className='flex flex-col justify-center w-full h-24 bg-gray4 mb-6'>
        <h1 className='text-xl semibold pl-6'>Smash 1</h1>
        <div className='flex mt-2 pl-4 text-sm'>
          <div className='mx-2 text-gray-500'>
            <h5>날짜</h5>
            <h5>시간</h5>
          </div>
          <div className='mx-1'>
            <h5>2023-09-20</h5>
            <h5>14:20</h5>
          </div>
        </div>
      </div>
      <feedback.Provider value={{ suggestInfo, setSuggestInfo }}>
        <SuggestForm options={options} />
      </feedback.Provider>
    </>
  );
}
