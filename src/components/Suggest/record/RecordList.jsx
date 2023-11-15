import React, { useContext } from 'react';
import arrow from '../../../static/chevron-right.png';
import { useNavigate } from 'react-router-dom';
import { setPage } from '../../../App';

export default function RecordList({ recordInfo, setDetailInfo }) {
  const { componentPage, setComponentPage } = useContext(setPage);

  function godetailsuggest(data) {
    console.log('test', data);
    setDetailInfo(data);
    setComponentPage(componentPage + 1);
  }

  const changeDate = (date) => {
    const offset = new Date().getTimezoneOffset() * 60000; // ms 단위를 맞추기 위해 60000 곱해줌
    const today = new Date(Date.now() - offset);
    // today.setDate(date);
    // console.log(today.toISOString());
    const todayDate = date.split('T')[0];
    return todayDate;
  };

  return (
    <div className='flex flex-col gap-2'>
      {recordInfo.map((data) => (
        <section
          key={data.id}
          className='w-full flex flex-col bg-gray4 rounded-2xl px-4 py-3 border-[1px]'
        >
          {data.status === 'ready' && (
            <div className='w-12 items-center text-center p-1 border-solid text-gray-400 rounded-full bg-gray3 text-btn tracking-wider gap-1'>
              <span>확인 전</span>
            </div>
          )}
          {data.status === 'progress' && (
            <div className='w-12 items-center text-center p-1 border-solid text-orange-400 rounded-full bg-gray3 text-btn tracking-wider gap-1'>
              <span>처리 중</span>
            </div>
          )}
          {data.status === 'done' && (
            <div className='w-14 items-center text-center p-1 border-solid text-blue-400 rounded-full bg-gray3 text-btn tracking-wider gap-1'>
              <span>처리 완료</span>
            </div>
          )}
          <h1 className='text-2xl font-bold mb-3'>{data.room_name}</h1>
          <div className='flex justify-between items-end'>
            <div className='flex gap-4'>
              <div className='text-sm text-gray0 font-semibold'>
                <h2>날짜</h2>
                <h2>건의사유</h2>
              </div>
              <div className='text-sm font-semibold'>
                <h2>{changeDate(data.create_at)}</h2>
                <h2>{data.case}</h2>
              </div>
            </div>
            <div className=''>
              <button onClick={() => godetailsuggest(data)} className='flex'>
                <h2 className='text-xs text-gray0'>세부내용보기</h2>
                <img src={arrow} className='w-[14px]' />
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
