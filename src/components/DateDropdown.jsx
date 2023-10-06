import { useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import useDateOptions from '../hooks/useDateOptions';

function DateDropdown({ onDateSelect, selectedDate }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = useDateOptions();

  const handleDateSelect = (date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
    setIsOpen(false);
  };

  return (
    <section className='px-4 text-sm'>
      <div
        className='w-full h-[45px] flex justify-between items-center p-4 pr-2 bg-gray4 cursor-pointer rounded-xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedDate || '날짜를 선택하세요'}
        {isOpen ? <GoTriangleUp size={32} /> : <GoTriangleDown size={32} />}
      </div>
      <div
        className={`rounded-xl absolute w-[90%] mt-2 bg-white border border-gray-300 z-10 max-h-[200px] overflow-y-auto shadow-lg transition-all duration-200 transform ${
          isOpen
            ? 'opacity-100 visible scale-100'
            : 'opacity-0 invisible scale-95'
        }`}
      >
        {options.map((date, index) => (
          <div
            key={index}
            className='p-2 hover:bg-gray-100 cursor-pointer rounded transition-all duration-200 my-1 mx-2 border-b border-gray-200 last:border-b-0'
            onClick={() => handleDateSelect(date)}
          >
            {date}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DateDropdown;
