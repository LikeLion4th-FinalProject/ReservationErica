import React from 'react';
import { useParams } from 'react-router-dom';
import { BsCalendar4Event } from 'react-icons/bs';

export default function Reservation() {
  const params = useParams();

  console.log(params);
  return (
    <div className='flex flex-col w-full h-full'>
      <section className='bg-gray4 p-4 flex flex-col gap-2'>
        <p className='text-xl font-extrabold'>Smash Room {params.id}번 방</p>
        <p className='text-sm font-thin'>{params.id}번 방 상세정보 ...</p>
      </section>
      <section>
        <div className='flex'>
          <BsCalendar4Event size={18} />
          <p className=''>예약할 날짜를 입력해주세요</p>
        </div>
        <div>달력들어갈부분</div>
      </section>
    </div>
  );
}
