import '../../index.css';
import '../../App.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { feedback } from '../../pages/Suggest';
import { client } from '../../api/client';

export default function SuggestModal({ title, isOpen, hasData }) {
  const { suggestInfo } = useContext(feedback);

  const offset = new Date().getTimezoneOffset() * 60000; // ms 단위를 맞추기 위해 60000 곱해줌
  const today = new Date(Date.now() - offset);
  const todayDate = today.toISOString().split('T')[0];

  const handleSubmit = async () => {
    isOpen(false);
    {
      hasData &&
        (await client
          .post('createfeedback/', suggestInfo)
          .then((response) => console.log(response))
          .catch((error) => console.log(error)));
    }
  };

  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full z-[99]'>
      <div className='w-full h-full bg-black opacity-70'></div>
      <div className='absolute max-w-[300px] w-[80%] h-[30%] bg-white shadow-xl flex flex-col justify-between rounded-3xl'>
        <h1
          className='semibold justify-center items-center h-full bg-[#ffffff] rounded-t-3xl'
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '17px',
          }}
        >
          {title}
          <div
            className='medium flex mt-2 text-sm'
            style={{ marginTop: '20px' }}
          >
            {hasData ? (
              <>
                <div className='medium mx-2 text-gray-500'>
                  <h5>장소</h5>
                  <h5>날짜</h5>
                  <h5>건의사유</h5>
                </div>
                <div className='medium mx-4'>
                  <h5>{suggestInfo.room_name}</h5>
                  <h5>{todayDate}</h5>
                  <h5>{suggestInfo.case}</h5>
                </div>
              </>
            ) : (
              <span className='text-sm text-center'>
                예약하기 페이지를 통해 회의실을
                <br /> 예약해주시고 이용해 주세요.
              </span>
            )}
          </div>
        </h1>

        <div className='w-full h-1/4 flex justify-between items-center'>
          {hasData ? (
            <>
              <button
                onClick={() => isOpen(false)}
                className='w-1/2 h-full text-center'
              >
                아니오
              </button>
              <button
                onClick={() => handleSubmit()}
                className='w-1/2 h-full text-center bg-myblue rounded-br-3xl text-white '
              >
                예
              </button>
            </>
          ) : (
            <button
              onClick={() => handleSubmit()}
              className='w-full h-full text-center bg-myblue rounded-b-3xl text-white '
            >
              확인
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
