import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { reserveTime } from '../../styles/static';
import { client } from '../../api/client';
import { fillReserveInfo, reserveConfirm } from '../../pages/ReserveHome';
import ConfirmInfo from '../reservation/ConfirmInfo';
import { setPage } from '../../App';

export default function ConfirmModal({ isOpen }) {
  const [isValid, setValid] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const { resInfo } = useContext(fillReserveInfo);
  const { componentPage, setComponentPage } = useContext(setPage);

  const handleReserveConfirm = async () => {
    await client
      .post('roomreserve/', resInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data.error) {
          console.log('이미 예약함 ㅋㅋ');
          setValid(false);
        } else setComponentPage(componentPage + 1);
      })
      .catch((error) => console.log(error));
    // navigate('/mypage/0');
  };
  console.log('해당 예약 정보로 예약하실 겁니까? : ', resInfo);

  const componentSwitch = (loc) => {
    switch (loc) {
      case '/reservation/smash':
        if (isValid)
          return (
            <ConfirmInfo content={'예약하시겠습니까?'} resInfo={resInfo} />
          );
        else
          return (
            <div className='text-center pt-6'>
              <span className='font-bold'>
                하루에 한 번만 예약할 수 있어요!
              </span>
              <p className='text-sm text-gray0 my-4'>
                이미 예약을 하셨어요.
                <br />
                취소하고 다시 하려면
                <br />
                <Link
                  to='/mypage/:id'
                  className='underline'
                >{`마이페이지>예약취소`}</Link>
                를 해주세요.
              </p>
            </div>
          );

      default:
        return (
          <div className='flex justify-center items-center min-h-[100px]'>
            예약정보를 받아오는 중입니다...
          </div>
        );
    }
  };

  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]'>
      <div className='w-full h-full bg-black opacity-50'></div>
      <div className='absolute max-w-[400px] w-[80%]  bg-white shadow-xl flex flex-col justify-between rounded-3xl'>
        {componentSwitch(location.pathname)}
        {isValid ? (
          <div className='w-full flex justify-between items-center'>
            <button
              onClick={() => isOpen(false)}
              className='w-1/2 h-full text-center py-4'
            >
              아니오
            </button>
            <button
              onClick={handleReserveConfirm}
              className='w-1/2 h-full text-center bg-myblue rounded-br-3xl text-white  py-4'
            >
              예
            </button>
          </div>
        ) : (
          <button
            onClick={() => isOpen(false)}
            className='w-full h-full text-center bg-myblue rounded-b-3xl text-white  py-4'
          >
            예
          </button>
        )}
      </div>
    </div>
  );
}
