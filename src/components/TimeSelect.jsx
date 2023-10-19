import React, { useEffect, useState } from 'react';
import ImpossibleButton from './reserveButton/ImpossibleButton';
import PossibleButton from './reserveButton/PossibleButton';

export default function TimeSelect({ selectedDate, nowDate }) {
  const [reserveRoom, setReserveRoom] = useState(false);

  const formatDateToDisplay = (pickDate) => {
    const options = { month: 'long', day: 'numeric' };
    const date = new Date(pickDate);
    return date.toLocaleDateString('ko-KR', options);
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  const formattedDate = formatDateToDisplay(selectedDate.pickDate);
  // console.log(formattedDate); // "10월 23일"
  const nowTime = new Date();

  const hours = [];
  for (let i = 0; i < 26; i++) {
    hours.push(i);
  }

  // 1. 오늘날짜인지 확인하고
  const isToday =
    `${nowTime.getMonth() + 1}월 ${nowTime.getDate()}일` === formattedDate
      ? true
      : false;
  // console.log(isToday);
  // console.log(nowTime.getHours());

  // 2. 현재시간 기준으로 예약 불가능한 시간 계산하기
  const findTimeIndex = () => {
    if (nowTime.getMinutes() < 30) return (nowTime.getHours() - 9) * 2 - 1;
    else return (nowTime.getHours() - 9) * 2;
  };
  const impossibleIndex = findTimeIndex();

  /**
   * if (formattedDate == 오늘 날짜일 때)
   *    - 현재시간을 받아옴
   *    - 현재시간을 기준으로 이전에 예약 불가능한 타임 -> Impossible.jsx
   *    - 나머지 시간 중 예약 가능하면 Possible.jsx, 예약이 차있으면 InUse.jsx
   *
   * 백엔드에서 데이터 가져온 것이, 해당 시간에 0개이면 InUse, 1개 이상이면 Possible
   */
  return (
    <>
      <span className='text-[#BEBEBE] text-xs flex justify-end pr-2 pb-2'>{`${nowDate} ${nowTime.getHours()}:${nowTime.getMinutes()} 기준`}</span>
      <section className='w-full flex flex-col bg-gray4 shadow-md rounded-2xl px-4 py-3 border-[1px]'>
        <div>{`${formattedDate} ${selectedDate.pickDay}요일`}</div>
        <section className='grid grid-cols-8 grid-rows-3 mt-2 gap-1 mb-3 items-end justify-between'>
          {hours.map((hour, index) => (
            <div key={index} className='flex flex-col'>
              {index % 2 == 0 && (
                <span className='text-[8px] text-start mb-1'>
                  {hour / 2 + 9}:00
                </span>
              )}
              <div className='flex gap-[1px]'>
                {isToday && impossibleIndex >= index - 1 ? (
                  <ImpossibleButton />
                ) : (
                  <PossibleButton
                    count={3}
                    getResTime={reserveRoom}
                    setResTime={setReserveRoom}
                    clickTime={index}
                  />
                )}
              </div>
            </div>
          ))}
        </section>
      </section>
      {reserveRoom && (
        <section>
          <span>클릭한 시간표시</span>
        </section>
      )}
    </>
  );
}
