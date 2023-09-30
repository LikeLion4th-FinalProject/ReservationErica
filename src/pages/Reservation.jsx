import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCalendar4Event } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { ko } from 'date-fns/esm/locale';

export default function Reservation() {
  const params = useParams();
  console.log(params);
  const [startDate, setStartDate] = useState(null);

  return (
    <div className='flex flex-col w-full h-full'>
      <section className='bg-gray4 p-4 flex flex-col gap-2'>
        <p className='text-xl font-extrabold'>Smash Room {params.id}번 방</p>
        <p className='text-sm font-thin'>{params.id}번 방 상세정보 ...</p>
      </section>
      <section className='py-2 px-4'>
        <div className='flex items-center gap-2 font-bold'>
          <BsCalendar4Event size={18} />
          <p className=''>예약할 날짜를 선택해주세요</p>
        </div>
        <div>
          <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 7)}
            placeholderText='최대 7일만 고를 수 있음'
          />
        </div>
      </section>
    </div>
  );
}
