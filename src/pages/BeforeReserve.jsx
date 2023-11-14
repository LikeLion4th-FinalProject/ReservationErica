import '../index.css';
import '../App.css';

import React from 'react';

function BeforeReserve() {
  return (
    <div className='px-6'>
      <p
        className='semibold'
        style={{
          fontSize: '18px',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        이전 예약내역
      </p>
      <section className='w-full h-36 flex justify-center bg-gray4 rounded-2xl px-4 py-14 text-gray1 border-[1px]'>
        <p>현재 6개월 간 건의내역이 없습니다.</p>
      </section>
    </div>
  );
}

export default BeforeReserve;
