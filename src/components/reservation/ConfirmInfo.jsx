import { client } from '../../api/client';
import { reserveTime } from '../../styles/static';
import { getRoomType } from '../../api/room';
import { useEffect, useState } from 'react';

export default function ConfirmInfo({ content, resInfo }) {
  return (
    <div
      className={`flex flex-col justify-center items-center h-full bg-gray3 p-8 ${
        content === '예약내역' ? `rounded-2xl` : `rounded-t-3xl`
      }`}
    >
      <p className='font-bold text-lg text-center mb-[18px]'>{content}</p>
      <div className='flex flex-col'>
        <p className='flex gap-10'>
          <span className='text-gray-500 font-thin'>장소</span>
          <span>{resInfo.room_name}</span>
        </p>
        <p className='flex gap-10'>
          <span className='text-gray-500 font-thin'>날짜</span>
          <span>{resInfo.date}</span>
        </p>
        <p className='flex gap-10'>
          <span className='text-gray-500 font-thin'>시간</span>
          <span>{`${reserveTime[resInfo.start]} ~ ${
            reserveTime[resInfo.end + 1]
          }`}</span>
        </p>
      </div>
    </div>
  );
}
