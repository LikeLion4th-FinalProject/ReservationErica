import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RouteTest() {
  const navigate = useNavigate();

  const gotoReservationPage = (id) => {
    navigate(`/reservation/${id}`);
  };
  return (
    <div>
      <div
        className='w-full h-10 border bg-gray-300 my-4 flex justify-center items-center rounded-full'
        onClick={() => gotoReservationPage(0)}
      >
        스룸 0번방
      </div>
      <div
        className='w-full h-10 border bg-gray-300 my-4 flex justify-center items-center rounded-full'
        onClick={() => gotoReservationPage(1)}
      >
        스룸 1번방
      </div>
      <div
        className='w-full h-10 border bg-gray-300 my-4 flex justify-center items-center rounded-full'
        onClick={() => gotoReservationPage(2)}
      >
        스룸 2번방
      </div>
      <div
        className='w-full h-10 border bg-gray-300 my-4 flex justify-center items-center rounded-full'
        onClick={() => gotoReservationPage(3)}
      >
        스룸 3번방
      </div>
      <div
        className='w-full h-10 border bg-gray-300 my-4 flex justify-center items-center rounded-full'
        onClick={() => navigate(-1)}
      >
        뒤로 가기
      </div>
    </div>
  );
}
