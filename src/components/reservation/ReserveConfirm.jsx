import { useNavigate } from 'react-router-dom';
import ConfirmInfo from './ConfirmInfo';
import completeImg from '../../assets/studyHYU.png';

export default function ReserveConfirm({ resInfo }) {
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');
  return (
    <div className='flex flex-col h-full items-center justify-around'>
      <div className='w-full flex flex-col items-center gap-3'>
        <span className='text-lg'>{username} 님,</span>
        <p className='text-2xl font-black'>예약되었습니다!</p>
      </div>
      <img src={completeImg} alt='하냥이성공' width='190px' height='190px' />
      <div>
        <ConfirmInfo content={'예약내역'} resInfo={resInfo} />
      </div>
      <div className='w-full flex flex-col items-center gap-6'>
        <button
          onClick={() => navigate('/')}
          className='w-[80%] bg-blue-500 rounded-full py-3 text-white mt-3'
        >
          완료
        </button>
        <button
          onClick={() => navigate('/mypage/:id')}
          className='w-[80%] bg-gray3 rounded-full py-3'
        >
          예약 관리하기
        </button>
      </div>
    </div>
  );
}
