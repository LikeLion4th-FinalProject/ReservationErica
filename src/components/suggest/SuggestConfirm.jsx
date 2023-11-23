import React from 'react';
import { useNavigate } from 'react-router-dom';
import completeImg from '../../assets/studyHYU.png';
export default function SuggestConfirm() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');
  return (
    <div className='flex flex-col h-full items-center justify-center gap-[60px]'>
      <div className='w-full flex flex-col items-center gap-3 mt-10'>
        <span className='text-lg'>{username} 님,</span>
        <p className='text-2xl font-black'>소중한 의견 감사합니다!</p>
      </div>
      <img src={completeImg} alt='하냥이성공' width='190px' height='190px' />
      <div className='text-center'>
        건의가 처리되기까지 <br />
        평균 2~3일이 소요돼요
      </div>
      <div className='w-full flex flex-col items-center gap-6'>
        <button
          onClick={() => location.reload()}
          className='w-[80%] bg-blue-500 rounded-full py-3 text-white mt-3'
        >
          완료
        </button>
        <button
          onClick={() => navigate('/mypage/before-suggest')}
          className='w-[80%] bg-gray3 rounded-full py-3'
        >
          건의내역 확인하기
        </button>
      </div>
    </div>
  );
}
