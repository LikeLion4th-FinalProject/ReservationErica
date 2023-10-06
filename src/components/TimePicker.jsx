import { useRef, useEffect, useState } from 'react';

const Picker = ({ list, onSelectedChange }) => {
  const SCROLL_DEBOUNCE_TIME = 100;

  const newList = ['', ...list, ''];
  const ref = useRef(null);
  const [selected, setSelected] = useState(1);
  const itemRefs = useRef([]);
  const timerRef = useRef(null);
  const ITEM_HEIGHT = 30;

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
        if (list[index] !== '') {
          setSelected(index);
          itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
          onSelectedChange && onSelectedChange(newList[index]);
        }
      }, SCROLL_DEBOUNCE_TIME);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = selected * ITEM_HEIGHT;
    }
  }, []);

  return (
    <ul
      ref={ref}
      onScroll={handleScroll}
      className='w-full overflow-hidden h-[90px] overflow-y-scroll '
    >
      <div className='box-border border-t border-b h-[30px] sticky top-[30px]' />
      {newList.map((item, index) => (
        <li
          key={index}
          className={`h-[30px] flex justify-center items-center ${
            index === selected ? 'font-bold opacity-100' : 'opacity-40'
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
