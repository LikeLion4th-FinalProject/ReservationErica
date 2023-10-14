import { useRef, useEffect, useState } from 'react';

const Picker = ({
  isStart,
  flag,
  data,
  reserveInfo,
  pickList,
  onSelectedChange,
}) => {
  const SCROLL_DEBOUNCE_TIME = 100;

  const newList = ['', ...pickList, ''];

  // ul 을 참조
  const ref = useRef(null);
  // 선택된 항목의 순서를 저장 (초기값이 1인 이유 -> newList의 처음, 마지막 항이 빈 문자열이므로)
  const [selected, setSelected] = useState(1);
  const itemRefs = useRef([]);
  const timerRef = useRef(null);
  const ITEM_HEIGHT = 30;

  // 실제로 스크롤 중 선택된 item을 정중앙으로 정렬해주는 스크롤 이벤트를 적용해주는 함수
  const handleScroll = () => {
    if (ref.current) {
      clearTimeout(timerRef.current);
      if (ref.current.scrollTop < ITEM_HEIGHT) {
        ref.current.scrollTop = ITEM_HEIGHT;
      }
      timerRef.current = setTimeout(() => {
        const index = Math.floor(
          (ref.current.scrollTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT
        );
        if (pickList[index] !== '') {
          setSelected(index);
          itemRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
          onSelectedChange && onSelectedChange(newList[index]);
          if (isStart) {
            flag == 'startLange' &&
              reserveInfo({ ...data, startLange: pickList[index - 1] });
            flag == 'startHour' &&
              reserveInfo({ ...data, startHour: pickList[index - 1] });
            flag == 'startMinute' &&
              reserveInfo({ ...data, startMinute: pickList[index - 1] });
          } else {
            flag == 'endLange' &&
              reserveInfo({ ...data, endLange: pickList[index - 1] });
            flag == 'endHour' &&
              reserveInfo({ ...data, endHour: pickList[index - 1] });
            flag == 'endMinute' &&
              reserveInfo({ ...data, endMinute: pickList[index - 1] });
          }
        }
      }, SCROLL_DEBOUNCE_TIME);
    }
  };

  // picker컴포넌트가 마운트시, 초기에 설정된 값이 정중앙에 올 수 있도록 scrollTop값을 설정
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = selected * ITEM_HEIGHT;
    }
  }, []);

  return (
    <ul
      ref={ref}
      onScroll={handleScroll}
      className='w-full overflow-hidden h-[90px] overflow-y-auto scroll-custom'
    >
      <div className='box-border h-[30px] bg-gray3 sticky top-[30px]' />
      {newList.map((item, index) => (
        <li
          key={index}
          className={`h-[30px] flex justify-center items-center z-10 ${
            index === selected
              ? 'font-bold opacity-100 text-[#0D51FF] sticky'
              : 'opacity-20'
          }`}
          ref={(el) => (itemRefs.current[index] = el)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Picker;
