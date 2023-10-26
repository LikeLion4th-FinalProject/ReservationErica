import React, { useEffect, useRef, useState } from 'react';
import ImpossibleButton from './reserveButton/ImpossibleButton';
import PossibleButton from './reserveButton/PossibleButton';
import Alert from './Alert';
import { reserveTime } from '../styles/static';
import ConfirmModal from './modal/ConfirmModal';

export default function TimeSelect({ selectedDate, nowDate, listDayTable }) {
  const [reserveRoom, setReserveRoom] = useState(false);
  const [selectRange, setSelectRange] = useState([]);
  const [warningAlert, setWarningAlert] = useState(false);

  const clickDetail = useRef(null);

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
  console.log(hours, listDayTable);

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
    setReserveRoom(false);
  }, [selectedDate]);

  const handleClickTime = (idx) => {
    clickDetail.current?.scrollIntoView({ behavior: 'smooth' });
    if (selectRange.length === 0) {
      setReserveRoom(true);
      // 범위 시작 지점 선택
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

  const [isValidForm, setValidForm] = useState(false);

  const roomList = [
    { roomInfo: 'SMASH 1', id: 1 },
    { roomInfo: 'SMASH 2', id: 2 },
    { roomInfo: 'SMASH 3', id: 3 },
  ];

  return (
    <>
      <span className='text-[#BEBEBE] text-xs flex justify-end pr-2 pb-2'>{`${nowDate} ${nowTime.getHours()}:${nowTime.getMinutes()} 기준`}</span>
      <section className='w-full flex flex-col bg-gray4 shadow-md rounded-2xl px-4 py-3 border-[1px]'>
        <div className='text-xl font-black'>{`${formattedDate} ${selectedDate.pickDay}요일`}</div>
        <section className='grid grid-cols-8 grid-rows-3 mt-2 gap-1 mb-3 items-end justify-between'>
          {listDayTable &&
            listDayTable.map((count, index) => (
              <div key={index} className='flex flex-col'>
                {index % 2 == 0 && (
                  <span className='text-[8px] text-start mb-1'>
                    {index / 2 + 9}:00
                  </span>
                )}
                <div className='flex gap-[1px]'>
                  {isToday && impossibleIndex >= index - 1 ? (
                    <ImpossibleButton />
                  ) : (
                    <PossibleButton
                      count={count}
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
        <>
          <div className='my-6 rounded-full h-1 bg-gray3'></div>
          <section>
            {selectRange.length === 1 ? (
              <span className='text-xl font-black'>
                {reserveTime[selectRange[0]]}
              </span>
            ) : (
              <span className='text-xl font-black'>
                {`
                ${reserveTime[selectRange[0]]} ~ ${
                  reserveTime[selectRange[1] + 1]
                }
              `}
              </span>
            )}
            {roomList.map((room) => (
              <div
                ref={clickDetail}
                key={room.id}
                className='bg-gray4 w-full rounded-2xl flex justify-around items-center gap-4 px-5 py-2 shadow-sm my-4'
              >
                <span className='w-[35%] text-base'>{room.roomInfo}</span>
                <button
                  onClick={() => setValidForm(true)}
                  className='bg-[#0D51FF] w-full h-[40px] text-white rounded-2xl'
                >
                  <span>예약하기</span>
                </button>
              </div>
            ))}
          </section>
          {isValidForm && (
            <ConfirmModal
              content={'(예약정보 들어갈 공간)'}
              isOpen={setValidForm}
            />
          )}
        </>
      )}
      {warningAlert && <Alert />}
    </>
  );
}
