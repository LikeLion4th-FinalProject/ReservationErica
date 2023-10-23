import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const SuggestDropdown = ({ onSuggestSelect, selectedSuggest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["건의사유1", "건의사유2", "건의사유3"];

  const handleSuggestSelect = (choice) => {
    if (onSuggestSelect) {
      onSuggestSelect(choice);
    }
    setIsOpen(false);
  };

  return (
    <section className="px-4 text-sm">
      <div
        className="w-full h-[45px] flex justify-between items-center p-4 pr-2 bg-gray4 cursor-pointer rounded-xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedSuggest || (
          <span className="text-gray-400">건의사유를 선택해주세요</span>
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
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-95"
        }`}
      >
        {options.map((choice, index) => (
          <div
            key={index}
            className="p-2 hover:bg-gray-100 cursor-pointer rounded transition-all duration-200 my-1 mx-2 border-b border-gray-light last:border-b-none"
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
