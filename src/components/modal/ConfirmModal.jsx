import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { reserveTime } from '../../styles/static';
import { client } from '../../api/client';
import { reserveConfirm } from '../../pages/ReserveHome';
import ConfirmInfo from '../reservation/ConfirmInfo';

export default function ConfirmModal({ isOpen, reserveInfo }) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const isCompleteReserve = useContext(reserveConfirm);
  const handleReserveConfirm = () => {
    client
      .post('roomreserve/', reserveInfo)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    // navigate('/mypage/0');
    isCompleteReserve(true);
  };
  console.log('해당 예약 정보로 예약하실 겁니까? : ', reserveInfo);

  const componentSwitch = (loc) => {
    switch (loc) {
      case '/reservation':
        console.log('1');
        return (
          <ConfirmInfo content={'예약하시겠습니까?'} resInfo={reserveInfo} />
        );

      default:
        return <div>모달 테스트</div>;
    }
  };

  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]'>
      <div className='w-full h-full bg-black opacity-50'></div>
      <div className='absolute max-w-[400px] w-[80%]  bg-white shadow-xl flex flex-col justify-between rounded-3xl'>
        {componentSwitch(location.pathname)}
        <div className='w-full flex justify-between items-center'>
          <button
            onClick={() => isOpen(false)}
            className='w-1/2 h-full text-center py-4'
          >
            아니오
          </button>
          <button
            onClick={handleReserveConfirm}
            className='w-1/2 h-full text-center bg-[#0D51FF] rounded-br-3xl text-white  py-4'
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
}
