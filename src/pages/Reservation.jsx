import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCalendar4Event } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import IndicatorSection from '../components/IndicatorSection';

export default function Reservation() {
  const params = useParams();
  // console.log(params);
  const [startDate, setStartDate] = useState(null);
  const [selectTime, setSelectTime] = useState(true);
  const [peopleCount, setPeopleCount] = useState(0);
  console.log(selectTime);
  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

  return (
    <div className='flex flex-col bg-[#d9d9d9]'>
      <section className='p-4 flex flex-col gap-2 bg-gray4 mb-1'>
        <p className='text-xl font-extrabold'>Smash Room {params.id}번 방</p>
        <p className='text-sm font-thin'>{params.id}번 방 상세정보 ...</p>
      </section>
      <section className='py-2 px-4 bg-gray4 mb-[1px]'>
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
      <section className='px-4 bg-gray4 mb-[1px]'>
        <p className='mt-3 font-bold text-[20px] text-body'>예약 현황</p>
        <IndicatorSection />
        <section className='grid grid-cols-7 grid-rows-2 mt-2 gap-1 mb-3'>
          {hours.map((hour, index) => (
            <div key={index} className='flex flex-col'>
              <span className='text-[8px] text-start mb-1'>{hour}</span>
              <div className='flex gap-[1px]'>
                <div className='w-[25px] h-[15px] bg-gray2' />
                <div className='w-[25px] h-[15px] bg-gray2' />
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className='px-4 bg-gray4 mb-[1px]'>
        <p>시간을 선택해주세요</p>
        <div className='flex justify-around border-b'>
          <div
            className={`w-full text-center border-b ${
              selectTime && 'text-[#0D51FF] border-[#0D51FF]'
            }`}
            onClick={() => setSelectTime(true)}
          >
            이용 시작
          </div>
          <div
            className={`w-full text-center border-b ${
              !selectTime && 'text-[#0D51FF] border-[#0D51FF]'
            }`}
            onClick={() => setSelectTime(false)}
          >
            이용 종료
          </div>
        </div>
        <p>최소 30분 최대 2시간 이용 가능</p>
        {selectTime ? <div>시작 탭</div> : <div>종료 탭</div>}
      </section>
      <section className='px-4 bg-gray4 mb-1 py-2'>
        <p>인원 수를 입력해주세요</p>
        <div className='flex justify-between'>
          <span>{peopleCount}명</span>
          <div className='bg-gray3 mb-2 px-4 py-1 rounded-2xl'>
            <button onClick={() => setPeopleCount(peopleCount - 1)}>-</button>
            <span className='mx-6'>{peopleCount}</span>
            <button onClick={() => setPeopleCount(peopleCount + 1)}>+</button>
          </div>
        </div>
      </section>
      <section className='px-4 bg-gray4'>비품 목록</section>
      <div className='sticky top-0 px-4 py-2 bg-gray4 border-t border-[#0D51FF] text-[#0D51FF]'>
        2023.09.27(화), 15:00 ~ 17:00, 3명
      </div>
    </div>
  );
}
