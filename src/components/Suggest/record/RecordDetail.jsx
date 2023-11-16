import React from 'react';

import SuggestProgress1 from '../../BeforeSuggestDetail/SuggestProgress1';
import SuggestProgress2 from '../../BeforeSuggestDetail/SuggestProgress2';
import SuggestProgress3 from '../../BeforeSuggestDetail/SuggestProgress3';

// tt: 확인 전, ft: 처리 중, ff: 처리 완료
let nocheck_suggest = false;
let nofinish_suggest = false;

function RecordDetail({ detailInfo }) {
  return (
    <div>
      <div className='flex justify-evenly my-5 px-6'>
        {detailInfo.status === 'ready' && <SuggestProgress1 />}
        {detailInfo.status === 'progress' && <SuggestProgress2 />}
        {detailInfo.status === 'done' && <SuggestProgress3 />}
      </div>

      <div className='flex flex-col'>
        <div className='flex gap-3'>
          <p className='semibold text-lg pl-6'>건의내역</p>
          {detailInfo.status === 'ready' && (
            <div className='flex justify-center items-center px-3  text-gray1 rounded-full bg-gray3 text-xs'>
              확인 전
            </div>
          )}
          {detailInfo.status === 'progress' && (
            <div className='flex justify-center items-center px-3 rounded-full bg-gray3 text-xs text-myorange'>
              처리 중
            </div>
          )}
          {detailInfo.status === 'done' && (
            <div className='flex justify-center items-center px-3 rounded-full bg-gray3 text-xs text-myblue'>
              처리 완료
            </div>
          )}
        </div>
        <section className='w-full bg-gray4 my-5'>
          <h1 className='text-2xl font-bold mb-3 px-6 py-2'>
            {detailInfo.room_name}
          </h1>
          <div className='flex justify-between items-end px-6 py-2'>
            <div className='flex gap-4'>
              <div className='text-sm text-gray0 font-semibold'>
                <h2>날짜</h2>
                <h2>건의사유</h2>
              </div>
              <div className='text-sm font-semibold'>
                <h2>{detailInfo.create_at}</h2>
                <h2>{detailInfo.case}</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='px-6 pb-8 mb-20'>
        {/* <div className='w-full h-12 mb-4 rounded-2xl px-4 bg-gray4 flex items-center'>
          <p>{detailInfo.case}</p>
        </div> */}
        <div className='w-full min-h-[150px]  flex rounded-2xl px-4 bg-gray4 items-center'>
          <section className='flex justify-center py-4'>
            <p>{detailInfo.content}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RecordDetail;
