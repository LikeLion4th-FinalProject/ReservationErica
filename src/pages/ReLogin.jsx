import React from 'react';
import { useNavigate } from 'react-router-dom';
import alertHYU from '../assets/4.png';

export default function ReLogin() {
  const navigate = useNavigate();

  return (
    <div className='h-full flex flex-col justify-center items-center px-6'>
      <div className='flex flex-col items-center'>
        <span className='text-xl text-center'>
          사용자 로그인 세션이 만료되었습니다.
        </span>
        <img src={alertHYU} alt='하냥이알림' width='80%' />
      </div>
      <span className='mb-20'>로그인 화면으로 이동 해주세요!</span>
      <button
        className='bg-[#0D51FF] text-white rounded-full w-[80%] py-4'
        onClick={() => navigate('/login')}
      >
        로그인 화면으로 이동하기
      </button>
    </div>
  );
}
