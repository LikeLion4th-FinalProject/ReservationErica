import React, { useEffect, useState } from 'react';
import ImpossibleButton from './reserveButton/ImpossibleButton';
import PossibleButton from './reserveButton/PossibleButton';
import Alert from './Alert';

export default function TimeSelect({ selectedDate, nowDate }) {
  const [reserveRoom, setReserveRoom] = useState(false);
  const [selectRange, setSelectRange] = useState([]);
  const [warningAlert, setWarningAlert] = useState(false);

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

  useEffect(() => {
    setSelectRange([]);
  }, [selectedDate]);

  const handleClickTime = (idx) => {
    if (selectRange.length === 0) {
      // 범위 시작 지점 선택
      setReserveRoom(true);
      setSelectRange([idx]);
    } else if (selectRange.length === 1) {
      setReserveRoom(true);
      const startTime = selectRange[0];
      if (idx > startTime) {
        if (idx > startTime + 3) {
          handleWarning();
        }
        // 범위 끝 지점 선택
        else setSelectRange([startTime, idx]);
      }
      // 범위를 역순으로 선택한 경우 범위 시작 지점을 변경
      else setSelectRange([idx]);
    } else {
      // 범위 선택 해제
      setReserveRoom(false);
      setSelectRange([]);
    }
  };
  console.log(selectRange);

  const handleWarning = () => {
    setWarningAlert(true);
    const alert = setInterval(() => {
      setWarningAlert(false);
    }, 2000);

    return () => clearInterval(alert);
  };

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
                    clickTime={index}
                    handleClickTime={handleClickTime}
                    selectRange={selectRange}
                  />
                )}
              </div>
            </div>
          ))}
        </section>
      </section>
      {reserveRoom && (
        <section>
          <span>{selectRange[0]}</span>
        </section>
      )}
      {warningAlert && <Alert />}
    </>
  );
}
