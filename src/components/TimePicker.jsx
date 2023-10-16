import { useRef, useEffect, useState } from 'react';

const Picker = ({
  isStart,
  flag,
  getInfoData,
  setInfoData,
  pickList,
  onSelectedChange,
}) => {
  const SCROLL_DEBOUNCE_TIME = 100;

  const newList = ['', ...pickList, ''];
  // console.log(getInfoData);

  const indexOfNewList = getIndexOfNewList();
  // console.log(indexOfNewList);

  function getIndexOfNewList() {
    let tmp = '';
    if (flag == 'startLange') {
      tmp = newList.indexOf(getInfoData.startLange);
      return tmp;
    }
    if (flag == 'startHour') {
      tmp = newList.indexOf(String(getInfoData.startHour));
      return tmp;
    }
    if (flag == 'startMinute') {
      tmp = newList.indexOf(getInfoData.startMinute);
      return tmp;
    }
    if (flag == 'endLange') {
      tmp = newList.indexOf(getInfoData.endLange);
      return tmp;
    }
    if (flag == 'endHour') {
      tmp = newList.indexOf(String(getInfoData.endHour));
      return tmp;
    }
    if (flag == 'endMinute') {
      tmp = newList.indexOf(getInfoData.endMinute);
      return tmp;
    }
  }

  // ul 을 참조
  const ref = useRef(null);
  // 선택된 항목의 순서를 저장
  const [selected, setSelected] = useState(indexOfNewList);
  console.log(selected, indexOfNewList);
  const itemRefs = useRef([]);
  const timerRef = useRef(null);
  const ITEM_HEIGHT = 30;

  useEffect(() => {
    // picker컴포넌트가 마운트시, 초기에 설정된 값이 정중앙에 올 수 있도록 scrollTop값을 설정
    if (ref.current) {
      ref.current.scrollTop = selected * ITEM_HEIGHT;
    }

    //
    setSelected(indexOfNewList);
    // handleScroll();
  }, [indexOfNewList, selected]);

  // 실제로 스크롤 중 선택된 item을 정중앙으로 정렬해주는 스크롤 이벤트를 적용해주는 함수
  const handleScroll = () => {
    if (ref.current) {
      clearTimeout(timerRef.current);
      // console.log(ref.current.scrollTop);
      if (ref.current.scrollTop < ITEM_HEIGHT) {
        ref.current.scrollTop = ITEM_HEIGHT;
      }
      timerRef.current = setTimeout(() => {
        const index = Math.floor(
          (ref.current.scrollTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT
        );
        // console.log(index);
        // ref.current.scrollTop = index * ITEM_HEIGHT;
        if (pickList[index] !== '') {
          // console.log(pickList[index]);
          setSelected(index);
          itemRefs.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
          // console.log(itemRefs.current[index - 1]);
          onSelectedChange && onSelectedChange(newList[index]);
          // console.log(`isStart : ${isStart}, index : ${index}, flag : ${flag}`);
          if (isStart) {
            flag == 'startLange' &&
              setInfoData({ ...getInfoData, startLange: pickList[index - 1] });
            flag == 'startHour' &&
              setInfoData({ ...getInfoData, startHour: pickList[index - 1] });
            flag == 'startMinute' &&
              setInfoData({ ...getInfoData, startMinute: pickList[index - 1] });
          } else {
            flag == 'endLange' &&
              setInfoData({ ...getInfoData, endLange: pickList[index - 1] });
            flag == 'endHour' &&
              setInfoData({ ...getInfoData, endHour: pickList[index - 1] });
            flag == 'endMinute' &&
              setInfoData({ ...getInfoData, endMinute: pickList[index - 1] });
          }
        }
      }, SCROLL_DEBOUNCE_TIME);
    }
  };

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
