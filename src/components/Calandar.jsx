import { useEffect, useState } from 'react';
import { dayList } from '../styles/static';

export default function Calandar({ data, reserveInfo }) {
  const [currentDay, setCurrentDay] = useState(new Date());
  /* let 변수로 선언한 이유 
  -> let 변수는 리렌더링 시 변수가 초기화됨 
  -> 따라서 변화된 값을 계속 유지하고 싶으면 useState or useRef 사용 (useRef는 값이 바뀌어도 리랜더링 X)
  -> 클릭이벤트 발생할 때 마다 useEffect 실행해서 리랜더링 해야하는데, 이 때 예외처리를 하려면 리랜더링될때마다 현재 날짜정보를 기준으로 비교해야하므로  */
  let nowYear = currentDay.getFullYear(); // 연
  let nowMonth = currentDay.getMonth(); // 월
  let nowDate = currentDay.getDate(); // 일
  let nowDay = currentDay.getDay(); // 요일
  // let nowYear = 2023;
  // let nowMonth = 11;
  // const nowDate = 29;
  // const nowDay = 5;
  const [datePick, setDatePick] = useState(nowDate);

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
    // console.log('선택한 날짜 : ', date);
  };

  useEffect(() => {
    const getDay = new Date(nowYear, nowMonth, datePick).getDay();
    if (datePick < nowDate) {
      nowMonth += 1;
      if (nowMonth == 12) {
        nowYear += 1;
        nowMonth = 0;
      }
    }
    reserveInfo({
      ...data,
      year: nowYear,
      month: nowMonth + 1,
      date: datePick,
      day: dayList[getDay],
    });
    // console.log('datePick : ', datePick);
  }, [datePick]);

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
          {availableArr.map((date, idx) => (
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
          ))}
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
