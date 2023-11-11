import React, { useContext, useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { feedback } from '../../pages/Suggest';
const SuggestDropdown = ({
  onSuggestSelect,
  selectedSuggest,
  options,
  notSuggest = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { suggestInfo, setSuggestInfo } = useContext(feedback);

  const handleSuggestSelect = (choice) => {
    if (onSuggestSelect) {
      notSuggest
        ? setSuggestInfo({ ...suggestInfo, room_name: choice })
        : setSuggestInfo({ ...suggestInfo, case: choice });
      onSuggestSelect(choice);
    }
    setIsOpen(false);
  };

  return (
    <section className='px-4 text-sm'>
      <div
        className='w-full h-[45px] flex justify-between items-center p-4 pr-2 bg-gray4 cursor-pointer rounded-xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedSuggest || (
          <span className='text-gray-400'>
            {notSuggest ? `방을 선택해주세요` : `건의사유를 선택해주세요`}
          </span>
        )}
        {isOpen ? (
          <RiArrowDropUpLine size={40} />
        ) : (
          <RiArrowDropDownLine size={40} />
        )}
      </div>
      <div
        className={`rounded-xl absolute w-[90%] mt-2 bg-white border border-gray-300 z-10 max-h-[200px] overflow-y-auto shadow-lg transition-all duration-200 transform ${
          isOpen
            ? 'opacity-100 visible scale-100'
            : 'opacity-0 invisible scale-95'
        }`}
      >
        {options?.map((choice, index) => (
          <div
            key={index}
            className={`p-2 hover:bg-gray-100 cursor-pointer rounded transition-all duration-200 my-1 mx-2 border-b border-gray-light last:border-b-0`}
            onClick={() => handleSuggestSelect(choice)}
          >
            {choice}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuggestDropdown;
