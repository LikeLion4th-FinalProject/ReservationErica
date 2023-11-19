import '../index.css';
import '../App.css';

import React, { useContext, useEffect, useState } from 'react';

import { recordSuggest } from '../api/suggest';
import SuggestCard from '../components/suggest/record/SuggestCard';
import { setPage } from '../App';

function SuggestRecord() {
  const { componentPage } = useContext(setPage);
  const [hasRecord, setHasRecord] = useState(false);
  const [recordInfo, setRecordInfo] = useState();

  const userId = sessionStorage.getItem('kakao_id');

  const fetchRecord = async () => {
    const response = await recordSuggest(userId);
    console.log(response);
    if (response) {
      setRecordInfo(response.reverse());
      setHasRecord(true);
    }
  };

  useEffect(() => {
    console.log('1');
    fetchRecord();
    console.log('2');
  }, []);

  return (
    <div>
      {componentPage === 1 && (
        <p className='semibold text-lg my-5 px-6'>건의내역</p>
      )}
      {!hasRecord ? (
        <div className='w-[90%] flex bg-gray4 border-[1px] rounded-2xl mx-auto'>
          <section className='w-full flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl px-4 py-14 text-gray1 items-center'>
            <p className='flex justify-center'>
              현재 6개월 간 건의내역이 없습니다.
            </p>
          </section>
        </div>
      ) : (
        <SuggestCard recordInfo={recordInfo} />
      )}
    </div>
  );
}

export default SuggestRecord;
