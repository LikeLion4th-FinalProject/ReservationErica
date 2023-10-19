import { useState } from 'react';

export default function PossibleButton({
  count,
  getResTime,
  setResTime,
  clickTime,
}) {
  const [startTime, setStartTime] = useState();
  const handleClickTime = (idx) => {
    setResTime(!getResTime);
    console.log(idx);
    setStartTime(idx);
  };

  return (
    <>
      {count == 0 ? (
        <button
          className='w-9 h-9 flex justify-center items-center bg-gray1 rounded-md'
          onClick={() => console.log('예약가능한 방이 없습니다')}
        >
          <span className='text-white font-black'>{count}</span>
        </button>
      ) : (
        <button
          className={`w-9 h-9 flex justify-center items-center rounded-md ${
            getResTime && clickTime === startTime
              ? 'bg-[#0D51FF]'
              : 'bg-orange-500'
          }`}
          onClick={() => handleClickTime(clickTime)}
        >
          <span className='text-white font-black'>{count}</span>
        </button>
      )}
    </>
  );
}

/**
 * 클릭하면 예약 가능한 방 목록이 하단에 생겨야 함
 * 시작시간 / 종료시간 선택하면 클릭한 두 버튼 사이틔 모든 버튼이 파랗게 변해야함..?
 *
 */
