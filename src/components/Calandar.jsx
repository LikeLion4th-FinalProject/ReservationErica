import { useState } from 'react';
import { dayList } from '../styles/static';

export default function Calandar() {
  const [currentDay, setCurrentDay] = useState(new Date());
  const nowYear = currentDay.getFullYear(); // 연
  const nowMonth = currentDay.getMonth(); // 월
  const nowDate = currentDay.getDate(); // 일
  const nowDay = currentDay.getDay(); // 요일
  const [datePick, setDatePick] = useState(nowDate);
  // const nowYear = 2023;
  // const nowMonth = 9;
  // const nowDate = 18;
  // const nowDay = 3;

  //주차 데이터를 담을 배열
  const tempArr = [];
  //예약 가능한 날짜들 담는 배열
  const availableArr = [];
  //금일 이전의 (에약불가능한)날짜 담는 배열
  const notAvailableArrBefore = [];
  //금일 이후의 (에약불가능한)날짜 담는 배열
  const notAvailableArrAfter = [];

  // 현재일 기준의 주차 중 첫번째 날(일요일)
  const firstDate = nowDate - nowDay;

  // 이전 월 기준 마지막 날의 날짜
  const beforeMonthDayLength = new Date(nowYear, nowMonth - 1, 0).getDate();

  // 현재 월 기준 마지막 날의 날짜
  const nowMonthDayLength = new Date(nowYear, nowMonth, 0).getDate();

  // 다음 월 기준 마지막 날의 날짜
  const afterMonthDayLength = new Date(nowYear, nowMonth, 0).getDate();

  // justArr에 담겨있는 오늘날짜의 index번호 저장하기
  let dateIndex = 0;
  // 일요일 기준으로 1씩 6번 for문을 돌려줌
  for (let i = 0; i < 14; i++) {
    let date = firstDate + i;
    //마지막 데이터가 다음 월인 경우
    if (date > nowMonthDayLength) {
      date = date - nowMonthDayLength;
      //처음 데이터가 이전 월인 경우
    } else if (date <= 0) {
      date = beforeMonthDayLength + date;
    }
    if (date === nowDate) dateIndex = i;

    tempArr.push(date);
  }

  for (let i = 0; i < 14; i++) {
    if (i < dateIndex) notAvailableArrBefore.push(tempArr[i]);
    else if (dateIndex + 7 > i) availableArr.push(tempArr[i]);
    else notAvailableArrAfter.push(tempArr[i]);
  }

  const handleDatePicker = (date) => {
    setDatePick(date);
    console.log('선택한 날짜 : ', date);
  };

  return (
    <>
      <section className='text-center'>
        <div className='my-4 text-gray-600'>{nowMonth + 1}월</div>
        <div className='grid grid-cols-7 mb-2 font-thin text-sm'>
          {dayList.map((day, idx) => (
            <span key={idx}>{day}</span>
          ))}
        </div>
        <section className='grid grid-cols-7 gap-2'>
          {notAvailableArrBefore.map((date, idx) => (
            <button key={idx} className='h-10 text-gray-300 hover:cursor-auto'>
              {date}
            </button>
          ))}
          {availableArr.map(
            (date, idx) => (
              <button
                key={idx}
                onClick={() => handleDatePicker(date)}
                className={`h-10 hover:cursor-pointer rounded-xl bg-white ${
                  datePick === date
                    ? 'bg-[#0D51FF] text-white'
                    : 'hover:bg-[#ceddff]'
                }`}
              >
                {date}
              </button>
            )
            // className='h-10 hover:cursor-pointer hover:bg-[#ceddff] hover:rounded-xl'
          )}
          {notAvailableArrAfter.map((date, idx) => (
            <button key={idx} className='h-10 text-gray-300 hover:cursor-auto'>
              {date}
            </button>
          ))}
        </section>
      </section>
    </>
  );
}
