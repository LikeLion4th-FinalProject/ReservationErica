import React, { useContext, useEffect, useState } from 'react';
import suggestMineHYU from '../../assets/suggest-mine.png';
import suggestOtherHYU from '../../assets/suggest-other.png';
import { setPage } from '../../App';
import { searchMyReservation } from '../../api/reservation';
import SuggestModal from '../modal/SuggestModal';

export default function SelectContent({ setSuggestType, setMyResInfo }) {
  const { componentPage, setComponentPage } = useContext(setPage);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleMyRoom = async () => {
    const myResInfo = await searchMyReservation();
    console.log('myResInfo : ', myResInfo);
    if (myResInfo) {
      setMyResInfo(myResInfo);
      setComponentPage(componentPage + 1);
      setSuggestType('mine');
    } else {
      console.log(componentPage);
      setModalOpen(true);
    }
    // setModalOpen(async () => await searchMyReservation());
  };
  const handleOthersRoom = () => {
    setComponentPage(componentPage + 1);
    setSuggestType('others');
  };

  // useEffect(() => {
  //   console.log(isModalOpen);
  // }, [isModalOpen]);

  return (
    <>
      <section>
        <div
          className='flex w-[95%] bg-gray4 mx-auto rounded-3xl my-4'
          onClick={() => handleMyRoom()}
        >
          <div className='flex flex-col justify-center p-4'>
            <p className='text-lg font-black mb-2'>내가 사용 중인 회의실</p>
            <p className='text-sm text-[#606060]'>
              이용중인 방에 대하여 도움이 필요하면 눌러주세요!
            </p>
          </div>
          <img src={suggestMineHYU} alt='하냥이공부중' width='40%' />
        </div>
        <div
          className='flex w-[95%] bg-gray4 mx-auto rounded-3xl my-4'
          onClick={() => handleOthersRoom()}
        >
          <div className='flex flex-col justify-center p-4'>
            <p className='text-lg font-black mb-2'>다른 회의실</p>
            <p className='text-sm text-[#606060]'>
              다른 방에 대한 민원이 필요하면 눌러주세요!
            </p>
          </div>
          <img src={suggestOtherHYU} alt='하냥이공부중' width='40%' />
        </div>
      </section>
      {isModalOpen && (
        <SuggestModal
          title={'현재 예약한 회의실이 없어요!'}
          isOpen={setModalOpen}
          hasData={false}
        />
      )}
    </>
  );
}
