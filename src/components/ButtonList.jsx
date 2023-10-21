import { useState } from 'react';

function ButtonList() {
  const [selectedRange, setSelectedRange] = useState([]);

  const toggleButton = (buttonIndex) => {
    if (selectedRange.length === 0) {
      // 범위 시작 지점 선택
      setSelectedRange([buttonIndex]);
    } else if (selectedRange.length === 1) {
      // 범위 끝 지점 선택
      const start = selectedRange[0];
      if (buttonIndex > start) {
        setSelectedRange([start, buttonIndex]);
      } else {
        // 범위를 역순으로 선택한 경우 범위 시작 지점을 변경
        setSelectedRange([buttonIndex]);
      }
    } else {
      // 범위 선택 해제
      setSelectedRange([]);
    }
  };

  console.log(selectedRange);

  const hours = [];
  for (let i = 0; i < 26; i++) hours.push(i);

  const isContain = (idx) => {
    for (let i = idx; i < idx + 3; i++) {
      console.log(i);
      return selectedRange.includes(idx);
    }
  };

  return (
    <div className='grid grid-cols-8'>
      {hours.map((item, index) => (
        <button
          key={index}
          onClick={() => toggleButton(index)}
          className={`py-2 px-4 m-1 ${
            selectedRange.length === 1 &&
            (index < selectedRange[0] || index > selectedRange[0] + 3)
              ? 'bg-gray-400 pointer-events-none'
              : isContain(index)
              ? 'bg-blue-500'
              : 'bg-gray-300'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;
