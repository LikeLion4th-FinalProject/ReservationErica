import React, { useContext, useEffect, useState } from 'react';
import studyHYU from '../../assets/studyHYU.png';
import familyHYU from '../../assets/familyHYU.png';
import { setPage } from '../../App';
import { searchMyReservation } from '../../api/reservation';

export default function SelectContent({ setSuggestType }) {
  const { componentPage, setComponentPage } = useContext(setPage);
  const [isValid, setValid] = useState(true);

  const handleMyRoom = async () => {
    // await searchMyReservation();
    // searchMyReservation()
    //   .then((response) => setValid(response))
    //   .catch((error) => console.log('ERRor: ', error));
    setValid(await searchMyReservation());
    // setValid(async () => await searchMyReservation());
    console.log(await searchMyReservation());
    console.log('여기');
    setComponentPage(componentPage + 1);
    setSuggestType('mine');
  };
  const handleOthersRoom = () => {
    setComponentPage(componentPage + 1);
    setSuggestType('others');
  };

  useEffect(() => {
    console.log(isValid);
  }, [isValid]);

  return (
    <>
      {isValid ? (
        <section>
          <div
            className='flex w-[90%] bg-gray4 mx-auto rounded-3xl my-4'
            onClick={() => handleMyRoom()}
          >
            <div className='flex flex-col justify-center px-4'>
              <p className='text-lg'>내가 사용 중인 회의실</p>
              <p className='text-sm text-[#606060]'>
                이용중인 방에 대하여 도움이 필요하면 눌러주세요!
              </p>
            </div>
            <img src={studyHYU} alt='하냥이공부중' width='35%' />
          </div>
          <div
            className='flex w-[90%] bg-gray4 mx-auto rounded-3xl my-4'
            onClick={() => handleOthersRoom()}
          >
            <div className='flex flex-col justify-center px-4'>
              <p className='text-lg'>다른 회의실</p>
              <p className='text-sm text-[#606060]'>
                다른 방에 대한 민원이 필요하면 눌러주세요!
              </p>
            </div>
            <img src={familyHYU} alt='하냥이공부중' width='35%' />
          </div>
        </section>
      ) : (
        <div>test</div>
      )}
    </>
  );
}
