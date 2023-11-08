import { useContext, useState } from 'react';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import useDateOptions from '../hooks/useDateOptions';
import { pickDate } from '../pages/ReserveHome';

function DateDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const options = useDateOptions();
  // console.log('date drop down list : ', options);

  const { selectedDate, setSelectedDate } = useContext(pickDate);

  const handleDateSelect = (date, day) => {
    if (setSelectedDate) {
      setSelectedDate({
        ...selectedDate,
        pickDate: date,
        pickDay: day,
      });
    }
    // console.log(date, day);
    setIsOpen(false);
  };

  return (
    <section className='px-4 text-sm'>
      <div
        className='w-full h-[45px] flex justify-between items-center p-4 pr-2 bg-gray4 cursor-pointer rounded-xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {`${selectedDate.pickDate} (${selectedDate.pickDay})`}
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
            onClick={() =>
              handleDateSelect(date.formattedDate, date.formattedDay)
            }
          >
            {`${date.formattedDate} (${date.formattedDay})`}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DateDropdown;
