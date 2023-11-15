import '../index.css';
import '../App.css';

import React, { useEffect, useState } from 'react';

import { recordSuggest } from '../api/suggest';
import SuggestCard from '../components/suggest/record/SuggestCard';

function SuggestRecord() {
  const [hasRecord, setHasRecord] = useState(false);
  const [recordInfo, setRecordInfo] = useState();

  const userId = sessionStorage.getItem('kakao_id');

  const fetchRecord = async () => {
    const response = await recordSuggest(userId);
    console.log(response);
    if (response.length) {
      setRecordInfo(response);
      setHasRecord(true);
    }
  };

  useEffect(() => {
    console.log('1');
    fetchRecord();
    console.log('2');
  }, []);

  return (
    <div className='px-6'>
      <p
        className='semibold'
        style={{
          fontSize: '18px',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        건의내역
      </p>
      {!hasRecord ? (
        <div className='w-full flex flex-col bg-gray4 border-[1px] rounded-2xl'>
          <section className='w-full flex flex-col bg-gray4 rounded-t-2xl rounded-b-2xl px-4 py-14 text-gray1 items-center'>
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
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
