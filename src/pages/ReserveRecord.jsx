import React, { useEffect, useState } from 'react';
import { client } from '../api/client';
import { reservationList } from '../api/reservation';
import { reserveTime } from '../styles/static';

export default function ReserveRecord() {
  const [hasRecord, setReserveRecord] = useState(false);
  const [reserveInfo, setReserveInfo] = useState([]);

  console.log(1);

  const userId = sessionStorage.getItem('kakao_id');
  const fetchAPI = async () => {
    const response = await reservationList(userId);
    console.log(response);
    if (response.length === 0) setReserveRecord(false);
    else {
      setReserveRecord(true);
      setReserveInfo(response);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  console.log(2);

  return (
    <div className='w-full h-screen p-4'>
      <p className='font-bold mb-4 text-lg'>이전 예약내역</p>
      {!hasRecord ? (
        <div className='flex h-[150px] justify-center items-center mx-auto rounded-2xl bg-gray4 text-gray1 px-6'>
          최근 6개월간 예약 내역이 없습니다.
        </div>
      ) : (
        reserveInfo.reverse().map((item) => (
          <ul
            key={item.id}
            className='flex flex-col gap-4 justify-around mb-4 p-4 mx-auto rounded-2xl bg-gray4'
          >
            <li>
              <p className='font-black text-xl'>{item.room_name}</p>
            </li>
            <li className='flex flex-col'>
              {/* <p>
                <span className='text-gray1 mr-4'>인원</span> {item.peopleCount}
              </p> */}
              <p>
                <span className='text-gray1 mr-4'>이용 날짜</span> {item.date}
              </p>
              <p>
                <span className='text-gray1 mr-4'>이용 시간</span>{' '}
                {`${reserveTime[item.start]} ~ ${reserveTime[item.end + 1]}`}
              </p>
            </li>
          </ul>
        ))
      )}
    </div>
  );
}
