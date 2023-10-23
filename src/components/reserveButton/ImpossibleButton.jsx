import React from 'react';

export default function ImpossibleButton() {
  return (
    <>
      <button className='w-9 h-9 flex justify-center items-center bg-gray0 rounded-md hover:cursor-not-allowed'>
        <span className='text-white font-black'>X</span>
      </button>
    </>
  );
}

/**
 * 클릭 시  '이용시간이 지나 예약할 수 없습니다'와 같은 말풍선 띄울까?
 */
