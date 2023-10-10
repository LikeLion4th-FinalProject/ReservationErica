import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCalendar4Event } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { GoPeople } from 'react-icons/go';
import 'react-datepicker/dist/react-datepicker.css';
import IndicatorSection from '../components/IndicatorSection';
import TimePicker from '../components/TimePicker';
import {
  dayAndNight,
  dayList,
  selectHour,
  selectMinute,
} from '../styles/static';
import Calandar from '../components/Calandar';
import { isObjectFullyFilled } from '../utils/isObjectFullly';
import ConfirmModal from '../components/modal/ConfirmModal';

export default function Reservation() {
  const params = useParams();

  const [selectUse, setSelectUse] = useState(true);
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectTimeStart, setSelectTimeStart] = useState(1);
  const [selectTimeEnd, setSelectTimeEnd] = useState(1);
  const [isMaxPeople, setMaxPeople] = useState(false);
  const [isMinPeople, setMinPeople] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // 예약내용 들어갈 객체
  const [reserveInfo, setReserveInfo] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: dayList[new Date().getDay()],
    hour: null,
    minute: 0,
    useTime: null,
    people: peopleCount,
  });

  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(isObjectFullyFilled(reserveInfo));
    // console.log(isFormValid);
    if (peopleCount >= 8) setMaxPeople(true);
    else if (peopleCount <= 1) setMinPeople(true);
    else {
      setMaxPeople(false);
      setMinPeople(false);
    }
  }, [reserveInfo, peopleCount]);

  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

  return (
    <div className='flex flex-col bg-[#d9d9d9] pb-[100px]'>
      <section className='p-4 flex flex-col gap-2 bg-gray4 mb-1'>
        <p className='text-xl font-extrabold'>Smash Room {params.id}번 방</p>
        <p className='text-sm font-thin'>{params.id}번 방 상세정보 ...</p>
      </section>
      <section className='py-2 px-4 bg-gray4 mb-[1px]'>
        <div className='flex items-center gap-2 font-semibold'>
          <BsCalendar4Event size={15} />
          <p className='text-lg'>예약할 날짜를 선택해주세요</p>
        </div>
        <div>
          <Calandar data={reserveInfo} reserveInfo={setReserveInfo} />
        </div>
      </section>
      <section className='px-4 bg-gray4 mb-[1px]'>
        <p className='mt-3 font-semibold text-lg text-body'>예약 현황</p>
        <IndicatorSection />
        <section className='grid grid-cols-7 grid-rows-2 mt-2 gap-1 mb-3'>
          {hours.map((hour, index) => (
            <div key={index} className='flex flex-col'>
              <span className='text-[8px] text-start mb-1'>{hour}</span>
              <div className='flex gap-[1px]'>
                <div className='w-[25px] h-[15px] bg-gray2' />
                <div className='w-[25px] h-[15px] bg-gray2' />
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className='px-4 bg-gray4 mb-[1px] py-2'>
        <p className='flex items-center gap-1 font-semibold text-lg'>
          <BiTime size={20} />
          시간을 선택해주세요
        </p>
        <div className='flex justify-around border-b text-sm'>
          <div
            className={`w-full text-center border-b py-3 ${
              selectUse && 'text-[#0D51FF] border-[#0D51FF]'
            }`}
            onClick={() => setSelectUse(true)}
          >
            이용 시작
          </div>
          <div
            className={`w-full text-center border-b py-3 ${
              !selectUse && 'text-[#0D51FF] border-[#0D51FF]'
            }`}
            onClick={() => setSelectUse(false)}
          >
            이용 종료
          </div>
        </div>
        <p className='text-xs pt-3 pl-3'>최소 30분 최대 2시간 이용 가능</p>
        {selectUse ? (
          <div className='flex'>
            {/* <TimePicker
              isStart={true}
              data={reserveInfo}
              reserveInfo={setReserveInfo}
              hourList={selectHour}
              onSelectedChange={setSelectTimeStart}
            />
            <TimePicker
              isStart={true}
              data={reserveInfo}
              reserveInfo={setReserveInfo}
              hourList={selectHour}
              onSelectedChange={setSelectTimeStart}
            /> */}
            <TimePicker
              isStart={true}
              data={reserveInfo}
              reserveInfo={setReserveInfo}
              hourList={selectHour}
              onSelectedChange={setSelectTimeStart}
            />
          </div>
        ) : (
          <div>
            <TimePicker
              isStart={false}
              data={reserveInfo}
              reserveInfo={setReserveInfo}
              hourList={selectHour}
              onSelectedChange={setSelectTimeEnd}
            />
          </div>
        )}
      </section>
      <section className='px-4 bg-gray4 mb-1 py-2'>
        <p className='flex items-center gap-1 font-semibold text-lg'>
          <GoPeople />
          인원 수를 입력해주세요
        </p>
        <div className='flex justify-between mt-4 items-end'>
          <span className='text-sm pb-2 text-[#0D51FF]'>{peopleCount}명</span>
          <div className='bg-gray3 mb-2 px-4 py-1 rounded-2xl flex'>
            {!isMinPeople && (
              <button onClick={() => setPeopleCount(peopleCount - 1)}>
                <AiOutlineMinus size={18} className='font-black' />
              </button>
            )}
            <span className='mx-4'>{peopleCount}</span>
            {!isMaxPeople && (
              <button onClick={() => setPeopleCount(peopleCount + 1)}>
                <AiOutlinePlus size={18} className='font-black' />
              </button>
            )}
          </div>
        </div>
      </section>
      <section className='px-4 bg-gray4'>비품 목록</section>
      {reserveInfo && (
        <div className='fixed bottom-[49px] z-50 px-4 py-2 bg-gray4 border-t border-[#0D51FF] text-[#0D51FF] w-full h-[50px]'>
          {reserveInfo.year}.{reserveInfo.month}.{reserveInfo.date}(
          {reserveInfo.day}), 오후 {selectTimeStart}시 ~ {selectTimeEnd}시,{' '}
          {peopleCount}명
        </div>
      )}
      <section
        className={`fixed bottom-0 left-0 right-0 z-51 flex justify-around items-center text-gray0 border-t-[1px] border-gray1 w-full h-[50px]`}
      >
        {isFormValid ? (
          <button
            className='w-full h-full bg-[#0D51FF] text-white transition-colors duration-1000'
            onClick={() => setModalOpen(true)}
          >
            <span>예약하기</span>
          </button>
        ) : (
          <button className='w-full h-full bg-gray2 text-white'>
            <span>예약하기</span>
          </button>
        )}
      </section>
      {isModalOpen && (
        <ConfirmModal
          content={`Smash ${params.id}번 방을 예약하시겠습니까?`}
          isOpen={setModalOpen}
        />
      )}
    </div>
  );
}
/**
 * 투두리스트
 * 1. 모든 정보가 입력 되었을 경우에만 하단 버튼 활성화
 * 2. 하단 예약사항 한 눈에 보는거 어떻ㄱㅔ 고정시키지
 * 3. time picker 구현 => 오전/오후, 분으로 쪼개기
 */
