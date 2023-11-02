import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { reserveTime } from '../../styles/static';
import { client } from '../../api/client';
import { reserveInfomation } from '../../pages/ReserveHome';

export default function ConfirmModal({ content, isOpen, reserveInfo }) {
  const navigate = useNavigate();

  const isCompleteReserve = useContext(reserveInfomation);
  const reserveConfirm = () => {
    client
      .post('roomreserve/', reserveInfo)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    // navigate('/mypage/0');
    isCompleteReserve(true);
  };
  console.log(reserveInfo);

  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]'>
      <div className='w-full h-full bg-black opacity-50'></div>
      <div className='absolute max-w-[400px] w-[80%]  bg-white shadow-xl flex flex-col justify-between rounded-3xl'>
        <h1 className='flex justify-center items-center h-full bg-gray3 rounded-t-3xl py-8'>
          {reserveInfo ? (
            <>
              <div>
                <p className='font-bold text-lg text-center mb-[18px]'>
                  예약하시겠습니까?
                </p>
                <div className='flex flex-col'>
                  <p className='flex gap-10'>
                    <span className='text-gray-500 font-thin'>이름</span>
                    <span>{content}</span>
                  </p>
                  <p className='flex gap-10'>
                    <span className='text-gray-500 font-thin'>날짜</span>
                    <span>{reserveInfo.date}</span>
                  </p>
                  <p className='flex gap-10'>
                    <span className='text-gray-500 font-thin'>시간</span>
                    <span>{`${reserveTime[reserveInfo.start]} ~ ${
                      reserveTime[reserveInfo.end]
                    }`}</span>
                  </p>
                </div>
              </div>
            </>
          ) : (
            { content }
          )}
        </h1>
        <div className='w-full flex justify-between items-center'>
          <button
            onClick={() => isOpen(false)}
            className='w-1/2 h-full text-center py-4'
          >
            아니오
          </button>
          <button
            onClick={reserveConfirm}
            className='w-1/2 h-full text-center bg-[#0D51FF] rounded-br-3xl text-white  py-4'
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
}
