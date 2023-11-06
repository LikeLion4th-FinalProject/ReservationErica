import { client } from '../../api/client';
import { reserveTime } from '../../styles/static';
import { getRoomType } from '../../api/room';
import { useEffect, useState } from 'react';

export default function ConfirmInfo({ content, resInfo }) {
  console.log(resInfo);
  // const test = getRoomType();
  // console.log(test);

  const [roomname, setRoomname] = useState([]); // 상태 변수 초기화

  useEffect(() => {
    // 데이터를 가져오는 비동기 작업
    const fetchRoomInfo = async () => {
      try {
        const response = await client.get('rooms/');
        const data = response.data.filter(
          (item) => item.id == resInfo.room_id
        )[0].name;
        setRoomname(data); // 상태 업데이트
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoomInfo(); // 데이터 가져오기 함수 호출
  }, []); // 빈 배열을 두번째 인자로 전달하여 컴포넌트가 처음 렌더링될 때만 데이터 가져오도록 설정

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
          <span>{roomname}</span>
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
