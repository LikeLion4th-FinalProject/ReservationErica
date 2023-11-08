import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { PiSirenLight, PiSirenFill } from 'react-icons/pi';
import { useLocation, useNavigate } from 'react-router-dom';

function Header({ title }) {
  const navigate = useNavigate(-1);
  const location = useLocation();

  let headerContent;

  switch (location.pathname) {
    case '/mypage/0':
      headerContent = (
        <div className='h-[80px] w-full flex items-center justify-between px-4'>
          <h1 className='text-gray0 flex-[1.6] text-center'>마이 페이지</h1>
        </div>
      );
      break;
    case '/mypage/before-suggest':
      headerContent = (
        <section className='h-[56px] w-full flex items-center justify-between px-4'>
          <div className='w-full flex items-center justify-between'>
            <FaArrowLeft
              onClick={() => navigate(-1)}
              size={24}
              className='text-gray0 cursor-pointer flex-[0.2]'
            />
            <h1 className='text-gray0 flex-[1.6] text-center'>건의내역</h1>
            <div className='flex-[0.2]'></div>
          </div>
        </section>
      );
      break;
    case '/mypage/before-suggest-detail':
      headerContent = (
        <section className='h-[56px] w-full flex items-center justify-between px-4'>
          <div className='w-full flex items-center justify-between'>
            <FaArrowLeft
              onClick={() => navigate(-1)}
              size={24}
              className='text-gray0 cursor-pointer flex-[0.2]'
            />
            <h1 className='text-gray0 flex-[1.6] text-center'>건의 세부내용</h1>
            <div className='flex-[0.2]'></div>
          </div>
        </section>
      );
      break;
    case '/mypage/before-reserve':
      headerContent = (
        <section className='h-[56px] w-full flex items-center justify-between px-4'>
          <div className='w-full flex items-center justify-between'>
            <FaArrowLeft
              onClick={() => navigate(-1)}
              size={24}
              className='text-gray0 cursor-pointer flex-[0.2]'
            />
            <h1 className='text-gray0 flex-[1.6] text-center'>예약기록</h1>
            <div className='flex-[0.2]'></div>
          </div>
        </section>
      );
      break;
    case '/mypage/suggest':
      headerContent = (
        <section className='h-[56px] w-full flex items-center justify-between px-4'>
          <div className='w-full flex items-center justify-between'>
            <div className='flex-[0.2]'></div>
            <h1 className='text-gray0 flex-[1.6] text-center'>건의하기</h1>
            <AiOutlineClose
              onClick={() => navigate(-1)}
              size={24}
              className='text-gray0 cursor-pointer flex-[0.2]'
            />
          </div>
        </section>
      );
      break;
    default:
      headerContent = (
        <section className='h-[56px] w-full flex items-center justify-between px-4'>
          <div className='w-full flex items-center justify-between'>
            <FaArrowLeft
              onClick={() => navigate(-1)}
              size={24}
              className='text-gray0 cursor-pointer flex-[0.2]'
            />
            <h1 className='text-gray0 flex-[1.6] text-center'>{title}</h1>
            <button
              className='flex flex-col items-center'
              onClick={() => {
                navigate('/suggest');
              }}
            >
              {location.pathname === '/suggest' ? (
                <PiSirenFill size={23} className='text-myblue' />
              ) : (
                <PiSirenLight size={23} className='' />
              )}
              <span
                className={`text-[10px] ${
                  location.pathname === '/suggest' ? 'text-myblue' : ''
                }`}
              >
                건의하기
              </span>
            </button>
          </div>
        </section>
      );
  }

  return <>{headerContent}</>;
}

export default Header;
