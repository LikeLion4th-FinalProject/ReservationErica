import React, { useContext, useRef, useState } from 'react';
import { pickDate } from '../../pages/ReserveHome';
import { reserveTime } from '../../styles/static';
import ConfirmModal from '../modal/ConfirmModal';
import { fillReserveInfo } from '../../pages/ReserveHome';
import { SyncLoader } from 'react-spinners';

export default function RoomSelect({ selectRange, roomList }) {
  // const [resRoomName, setResRoomName] = useState();
  const [isValidForm, setValidForm] = useState(false);
  const clickDetail = useRef(null);

  const { selectedDate } = useContext(pickDate);
  const { resInfo, setResInfo } = useContext(fillReserveInfo);

  const handleReserveBtn = (roomId, roomName) => {
    setValidForm(true);
    const userId = sessionStorage.getItem('kakao_id');
    // setResRoomName(roomName);
    setResInfo({
      ...resInfo,
      room_name: roomName,
      date: selectedDate.pickDate,
      kakao_id: userId,
      start: selectRange[0],
      end: selectRange.length === 1 ? selectRange[0] : selectRange[1],
    });
  };

  return (
    <>
      <div className='my-6 rounded-full h-1 bg-gray3'></div>
      <section>
        {selectRange.length === 1 ? (
          <span className='text-xl font-black'>
            {`${reserveTime[selectRange[0]]} ~ ${
              reserveTime[selectRange[0] + 1]
            }`}
          </span>
        ) : (
          <span className='text-xl font-black'>
            {`
          ${reserveTime[selectRange[0]]} ~ ${reserveTime[selectRange[1] + 1]}
        `}
          </span>
        )}
        {roomList.length ? (
          roomList.map((room) => (
            <div
              ref={clickDetail}
              key={room.id}
              className='bg-gray4 w-full rounded-2xl flex justify-around items-center gap-4 px-5 py-2 shadow-sm my-4'
            >
              <span className='w-[35%] text-base'>{room.name}</span>
              <button
                onClick={() => handleReserveBtn(room.id, room.name)}
                className='bg-myblue w-full h-[40px] text-white rounded-2xl'
              >
                <span>예약하기</span>
              </button>
            </div>
          ))
        ) : (
          <div className='w-full mt-4 flex justify-center items-center'>
            <SyncLoader
              color='#6990F5'
              margin={12}
              size={15}
              speedMultiplier={0.7}
            />
          </div>
        )}
      </section>
      {isValidForm && <ConfirmModal isOpen={setValidForm} />}
    </>
  );
}
