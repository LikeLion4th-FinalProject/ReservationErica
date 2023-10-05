import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCalendar4Event } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { GoPeople } from 'react-icons/go';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import IndicatorSection from '../components/IndicatorSection';
import TimePicker from '../components/TimePicker';
import { dayAndNight, selectHour, selectMinute } from '../styles/static';

export default function Reservation() {
  const params = useParams();
  // console.log(params);
  const [startDate, setStartDate] = useState(new Date());
  const [selectUse, setSelectUse] = useState(true);
  const [peopleCount, setPeopleCount] = useState(0);
  const [selectTimeStart, setSelectTimeStart] = useState();
  const [selectTimeEnd, setSelectTimeEnd] = useState();

  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

  // const reserveInfo = [];
  // useEffect(() => {
  //   reserveInfo.push({
  //     resYear: startDate.getFullYear(),
  //     resMonth: startDate.getMonth() + 1,
  //     resDate: startDate.getDate(),
  //     resDay: startDate.getDay(),
  //   });
  //   console.log(reserveInfo[0]);
  // }, [reserveInfo]);

  const reserveInfo = {
    resYear: startDate.getFullYear(),
    resMonth: startDate.getMonth() + 1,
    resDate: startDate.getDate(),
    resDay: startDate.getDay(),
  };
  console.log(reserveInfo[0]);
  const numToDay = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className='flex flex-col bg-[#d9d9d9]'>
      <section className='p-4 flex flex-col gap-2 bg-gray4 mb-1'>
        <p className='text-xl font-extrabold'>Smash Room {params.id}번 방</p>
        <p className='text-sm font-thin'>{params.id}번 방 상세정보 ...</p>
      </section>
      <section className='py-2 px-4 bg-gray4 mb-[1px]'>
        <div className='flex items-center gap-2 font-semibold'>
          <BsCalendar4Event size={15} />
          <p className='text-lg'>예약할 날짜를 선택해주세요</p>
        </div>
        <div>
          <DatePicker
            locale={ko}
            // selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={addDays(new Date(), 7)}
            placeholderText='클릭하면 나옴 ㅋㅋ'
          />
        </div>
      </section>
      <section className='px-4 bg-gray4 mb-[1px]'>
        <p className='mt-3 font-semibold text-lg text-body'>예약 현황</p>
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
      <section className='px-4 bg-gray4 mb-[1px] py-2'>
        <p className='flex items-center gap-1 font-semibold text-lg'>
          <BiTime size={20} />
          시간을 선택해주세요
        </p>
        <div className='flex justify-around border-b text-sm'>
          <div
            className={`w-full text-center border-b py-3 ${
              selectUse && 'text-[#0D51FF] border-[#0D51FF]'
            }`}
            onClick={() => setSelectUse(true)}
          >
            이용 시작
          </div>
          <div
            className={`w-full text-center border-b py-3 ${
              !selectUse && 'text-[#0D51FF] border-[#0D51FF]'
            }`}
            onClick={() => setSelectUse(false)}
          >
            이용 종료
          </div>
        </div>
        <p className='text-xs pt-3 pl-3'>최소 30분 최대 2시간 이용 가능</p>
        {selectUse ? (
          <div>
            <TimePicker
              list={selectHour}
              onSelectedChange={setSelectTimeStart}
            />
          </div>
        ) : (
          <div>
            <TimePicker list={selectHour} onSelectedChange={setSelectTimeEnd} />
          </div>
        )}
      </section>
      <section className='px-4 bg-gray4 mb-1 py-2'>
        <p className='flex items-center gap-1 font-semibold text-lg'>
          <GoPeople />
          인원 수를 입력해주세요
        </p>
        <div className='flex justify-between mt-4 items-end'>
          <span className='text-sm pb-2 text-[#0D51FF]'>{peopleCount}명</span>
          <div className='bg-gray3 mb-2 px-4 py-1 rounded-2xl'>
            <button onClick={() => setPeopleCount(peopleCount - 1)}>-</button>
            <span className='mx-6'>{peopleCount}</span>
            <button onClick={() => setPeopleCount(peopleCount + 1)}>+</button>
          </div>
        </div>
      </section>
      <section className='px-4 bg-gray4'>비품 목록</section>
      {reserveInfo && (
        <div className='sticky bottom-0 left-0 right-0 z-51 px-4 py-2 bg-gray4 border-t border-[#0D51FF] text-[#0D51FF]'>
          {reserveInfo.resYear}.{reserveInfo.resMonth}.{reserveInfo.resDate}(
          {numToDay[reserveInfo.resDay]}), 오후 {selectTimeStart}시 ~{' '}
          {selectTimeEnd}시, {peopleCount}명
        </div>
      )}
    </div>
  );
}
/**
 * 투두리스트
 * 1. 달력 만들기 (커스터마이징 or JS달력 만들기 검색) : 공휴일 정보 가져오기?
 * 2. time picker 구현 => 오전/오후, 분으로 쪼개기
 * 3. 예약페이지 예약 내용 객체로 담아서 제출하기
 * 4-1. 하단바 내용입력으로 바꾸기
 * 4-2. 모든 정보가 입력 되었을 경우에만 하단 버튼 활성화
 */
