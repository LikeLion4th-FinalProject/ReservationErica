import React from 'react';

export default function ReserveRecord() {
  const hasReserveInfo = false;
  const reserveRecord = [
    {
      roomNumber: 1,
      peopleCount: 3,
      date: '2020-02-02',
      hour: '16:00 - 18:00',
    },
    {
      roomNumber: 2,
      peopleCount: 8,
      date: '2020-02-02',
      hour: '16:00 - 18:00',
    },
    {
      roomNumber: 4,
      peopleCount: 4,
      date: '2020-02-02',
      hour: '16:00 - 18:00',
    },
  ];
  return (
    <div className='w-full h-screen p-4'>
      <p className='font-bold mb-4 text-lg'>이전 예약내역</p>
      {hasReserveInfo ? (
        <div className='flex h-[150px] justify-center items-center mx-auto rounded-2xl bg-gray4 text-gray1'>
          최근 6개월간 예약 내역이 없습니다.
        </div>
      ) : (
        reserveRecord.map((item, index) => (
          <ul
            key={index}
            className='flex flex-col gap-4 justify-around mb-4 p-4 mx-auto rounded-2xl bg-gray4'
          >
            <li>
              <p className='font-bold text-lg'>SMASH {item.roomNumber}</p>
            </li>
            <li className='flex flex-col'>
              <p>
                <span className='text-gray1 mr-4'>인원</span> {item.peopleCount}
              </p>
              <p>
                <span className='text-gray1 mr-4'>날짜</span> {item.date}
              </p>
              <p>
                <span className='text-gray1 mr-4'>시간</span> {item.hour}
              </p>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}
