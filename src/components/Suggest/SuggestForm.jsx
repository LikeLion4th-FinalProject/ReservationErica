import '../../index.css';
import '../../App.css';

import React from 'react';
import { render } from 'react-dom';
import { useEffect, useState } from 'react';

import SuggestDropdown from './SuggestDropdown';
import SuggestModal from '../modal/SuggestModal';

export function SuggestForm({ type }) {
  console.log(type);
  const [selectedSuggest, setSelectedSuggest] = useState(null);
  const [isSuggestModalOpen, setSuggestModalOpen] = useState(false);

  // textarea 최대 글자수 제한
  const [text, setText] = useState('');
  const maxLength = 200;

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  // textarea 입력 여부에 따라 버튼 색상 결정
  const buttonColor = text.length > 0 ? '#0D51FF' : '#CCCCCC';

  // selectedSuggest가 null인 경우 textarea 비활성화
  const isTextareaDisabled = selectedSuggest === null;

  // textarea 입력 여부에 따라 버튼 활성화/비활성화 결정
  const isButtonDisabled = text.length === 0;

  return (
    <div>
      <SuggestDropdown
        onSuggestSelect={setSelectedSuggest}
        selectedSuggest={selectedSuggest}
      />
      <div className='px-5'>
        <textarea
          className={`w-full h-44 rounded-2xl bg-gray4 text-sm mt-5 px-[14px] py-5 break-all break-words ${
            isTextareaDisabled ? '' : 'focus:border-blue-700' // 이거 왜 안 되지
          }`}
          placeholder='자세한 내용을 적어주세요'
          value={text}
          onChange={handleChange}
          disabled={isTextareaDisabled} // textarea 비활성화 설정: 건의사유 선택 안 했을 때
        ></textarea>
        <div className='flex justify-end mr-1 text-xs text-gray-400'>
          <p>{`${text.length}/${maxLength}`}</p>
        </div>
      </div>

      <div
        className='bg-gray3 flex items-center grid grid-flow-col justify-stretch rounded-b-lg'
        style={{ fontSize: '14px' }}
      >
        {Button()}
        {isSuggestModalOpen && (
          <SuggestModal
            title={`건의하시겠습니까?`}
            // content2={`Smash 1`}
            // content3={`2023-09-26`}
            // content4={selectedSuggest}
            isOpen={setSuggestModalOpen}
          />
        )}
      </div>
    </div>
  );

  function Button() {
    const [isFormValid, setFormValid] = useState(true);

    if (isFormValid) {
      return (
        <>
          <button
            disabled={isButtonDisabled}
            className={`fixed bottom-0 w-full max-w-lg h-16 flex justify-around items-center ${
              isButtonDisabled ? 'bg-gray-300' : 'bg-blue-600'
            }`}
            style={{ zIndex: 9999 }}
            onClick={() => setSuggestModalOpen(true)}
          >
            <p
              className={`${isButtonDisabled ? 'text-gray-500' : 'text-white'}`}
            >
              건의하기
            </p>
          </button>
        </>
      );
    } else {
      return <></>;
    }
  }
}
