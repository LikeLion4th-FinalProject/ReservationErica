import React from 'react';

export default function Alert() {
  return (
    <div className='w-[90%] py-3 bg-black flex justify-center opacity-50 rounded-xl fixed bottom-[100px] transition-all transform visible translate-y-10'>
      <span className='text-center text-white font-thin'>
        최대 2시간까지 예약이 가능합니다!
        <br />
        이용시간을 준수해주세요
      </span>
    </div>
  );
}
