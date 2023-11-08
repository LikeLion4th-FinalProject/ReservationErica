import React, { useState } from 'react';
import SelectContent from '../components/suggest/SelectContent';

export default function Suggest() {
  const [suggestType, setSuggestType] = useState('mine');
  const [showDetail, setShowDetail] = useState(false);
  const handleShowComponent = () => {
    // console.log('??');
    switch (showDetail) {
      case true:
        return <div>test</div>;
      default:
        return <SelectContent setShowDetail={setShowDetail} />;
    }
  };
  return (
    <div>
      <p className='w-[90%] mx-auto text-lg font-semibold my-8'>건의하기</p>
      {handleShowComponent()}
    </div>
  );
}
