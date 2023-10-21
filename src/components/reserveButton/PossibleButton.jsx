import { useEffect, useState } from 'react';

export default function PossibleButton({
  count,
  getResTime,
  setResTime,
  clickTime,
  selectedDate,
}) {
  const [startTime, setStartTime] = useState();
  console.log(clickTime, startTime);
  const handleClickTime = (idx) => {
    setResTime(!getResTime);
    console.log('clickTime index : ', idx);
    setStartTime(idx);
  };

  useEffect(() => {
    setStartTime(null);
  }, [selectedDate]);

  const handleStyleBtn = () => {
    if (getResTime) {
      // console.log('test');
      if (clickTime < startTime || clickTime > startTime + 4) {
        // console.log(clickTime, startTime);
        return 'bg-gray1';
      } else {
        return clickTime === startTime && 'bg-[#0D51FF]';
      }
    }
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
          className={`w-9 h-9 flex justify-center items-center rounded-md ${handleStyleBtn()} bg-orange-500`}
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
