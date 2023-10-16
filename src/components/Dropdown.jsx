import { useEffect, useRef, useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { DropdownPropTypes } from "../types";

function Dropdown({ label, options, selected, onOptionSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionSelect = (option) => {
    if (onOptionSelect) {
      onOptionSelect(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`w-full h-[70px] flex flex-col justify-center items-start p-8 px-4 gap-2 ${
          selected ? "ring-secondary" : "ring-gray1"
        } ring-2 cursor-pointer rounded-lg `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <label htmlFor={label} className="text-sm font-medium text-gray-600">
          {label}
        </label>
        <div
          className={`flex text-lg justify-between items-center w-full ${
            selected ? "text-secondary semibold" : "text-gray1"
          }`}
        >
          {selected || `${label} 선택`}
          <span className="text-black">
            {isOpen ? <GoTriangleUp size={24} /> : <GoTriangleDown size={24} />}
          </span>
        </div>
      </div>
      <div
        className={`rounded-lg absolute w-full mt-2 bg-white border border-gray-300 z-10 max-h-[240px] overflow-y-auto shadow-lg transition-transform duration-300 transform origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="p-2 hover:bg-gray-100 cursor-pointer rounded transition-all duration-200 my-1 border-b border-gray-200 last:border-b-0"
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = DropdownPropTypes;

export default Dropdown;
