import React, { createContext, useState } from 'react';
import { SuggestForm } from './SuggestForm';
import SuggestDropdown from './SuggestDropdown';
import { smashRoomList, suggestForOthersRoom } from '../../static/info';
export const feedback = createContext();

export default function FormOthers() {
  const [selectedSuggest, setSelectedSuggest] = useState(null);
  const roomList = smashRoomList;
  const options = suggestForOthersRoom;
  const [suggestInfo, setSuggestInfo] = useState([]);

  return (
    <feedback.Provider value={{ suggestInfo, setSuggestInfo }}>
      <div className='flex flex-col gap-5'>
        <SuggestDropdown
          onSuggestSelect={setSelectedSuggest}
          selectedSuggest={selectedSuggest}
          options={roomList}
          notSuggest={true}
        />
        <SuggestForm options={options} />
      </div>
    </feedback.Provider>
  );
}
