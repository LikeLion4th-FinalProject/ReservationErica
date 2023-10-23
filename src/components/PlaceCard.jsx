import { RiAlarmWarningLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function PlaceCard({ idx, title }) {
  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

  return (
    <section className='w-full flex flex-col bg-gray4 shadow-md rounded-2xl px-4 py-3 border-[1px]'>
      <div className='flex justify-between items-center scroll-pr-32 pb-2 border-b-[1px] border-gray1'>
        <h1 className='text-lg semibold'>{title}</h1>
        <button className='flex items-center p-1 px-2 rounded-full bg-gray3 text-btn text-red tracking-wider gap-1'>
          <RiAlarmWarningLine size={12} />
          <span>건의하기</span>
        </button>
      </div>
      <h2 className='mt-3 text-body'>현재 예약 현황</h2>
      <section className='grid grid-cols-7 grid-rows-2 mt-2 gap-1 mb-3'>
        {hours.map((hour, index) => (
          <div key={index} className='flex flex-col'>
            <span className='text-[8px] text-start mb-1'>{hour}</span>
            <div className='flex gap-[1px]'>
              <div className='w-[25px] h-[15px] bg-gray2' />
              <div className='w-[25px] h-[15px] bg-gray2' />
            </div>
          </div>
        ))}
      </section>
      <Link to={`${idx}`}>
        <button className='flex justify-center w-full bg-gray0 text-white py-[10px] rounded-full text-sm'>
          예약하기
        </button>
      </Link>
    </section>
  );
}

export default PlaceCard;
