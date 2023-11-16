import React, { useContext } from 'react';
import arrow from '../../../static/chevron-right.png';
import { useNavigate } from 'react-router-dom';
import { setPage } from '../../../App';

export default function RecordList({ recordInfo, setDetailInfo }) {
  const { componentPage, setComponentPage } = useContext(setPage);

  function showDetailSuggest(data) {
    console.log('상세정보 : ', data);
    setDetailInfo(data);
    setComponentPage(componentPage + 1);
  }

  return (
    <div className='flex flex-col gap-2 px-6 pb-6'>
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
                <h2>{data.create_at.split('T')[0]}</h2>
                <h2>{data.case}</h2>
              </div>
            </div>
            <div className=''>
              <button onClick={() => showDetailSuggest(data)} className='flex'>
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
