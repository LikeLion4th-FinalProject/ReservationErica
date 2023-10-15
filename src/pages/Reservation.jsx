import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import IndicatorSection from '../components/IndicatorSection';
import TimePicker from '../components/TimePicker';
import {
  dayAndNight,
  dayList,
  selectHour,
  selectMinute,
  selectPeople,
} from '../styles/static';
import Calandar from '../components/Calandar';
import { isObjectFullyFilled } from '../utils/isObjectFullly';
import ConfirmModal from '../components/modal/ConfirmModal';
import {
  calculateInitialEndTimeHour,
  calculateInitialEndTimeLange,
  calculateInitialStartTimeHour,
  calculateInitialStartTimeLange,
  calculateInitialStartTimeMinute,
} from '../utils/initialStartTime';

export default function Reservation() {
  // console.log('랜더링 몇 번 될까요');
  const params = useParams();
  const today = new Date();

  const initialStartTimeLange = calculateInitialStartTimeLange();
  const initialStartTimeHour = calculateInitialStartTimeHour();
  const initialStartTimeMinute = calculateInitialStartTimeMinute();
  const initialEndTimeLange = calculateInitialEndTimeLange(
    initialStartTimeLange,
    initialStartTimeHour
  );
  const initialEndTimeHour = calculateInitialEndTimeHour(initialStartTimeHour);
  const initialEndTimeMinute = initialStartTimeMinute;
  // console.log(
  //   initialStartTimeLange,
  //   initialStartTimeHour,
  //   initialStartTimeMinute
  // );
  const [selectUse, setSelectUse] = useState(true);
  const [startTimeLange, setStartTimeLange] = useState(initialStartTimeLange);
  const [startTimeHour, setStartTimeHour] = useState(initialStartTimeHour);
  const [startTimeMinute, setStartTimeMinute] = useState(
    initialStartTimeMinute
  );

  const [endTimeLange, setEndTimeLange] = useState(initialEndTimeLange);
  const [endTimeHour, setEndTimeHour] = useState(initialEndTimeHour);
  const [endTimeMinute, setEndTimeMinute] = useState(initialEndTimeMinute);
  const [peopleCount, setPeopleCount] = useState();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const nowTime = new Date();
    // 현재시간 예외처리
    if (nowTime.getMinutes() < 30) {
      // 00~30 분 사이일 경우 초기 시간 조정
      setStartTimeMinute('30');
      if (nowTime.getHours() > 12) {
        setStartTimeLange('오후');
        setStartTimeHour(nowTime.getHours() - 12);
      }
    } else {
      // 30~60 분 사이일 경우 초기 시간 조정
      setStartTimeMinute('00');
      if (nowTime.getHours() > 12) {
        setStartTimeLange('오후');
        setStartTimeHour(nowTime.getHours() - 11);
      }
    }
  }, []);

  // 예약내용 들어갈 객체  (서버로 보낼 내용)
  const [reserveInfo, setReserveInfo] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: dayList[today.getDay()],
    startLange: startTimeLange,
    startHour: startTimeHour,
    startMinute: startTimeMinute,
    endLange: endTimeLange,
    endHour: endTimeHour,
    endMinute: endTimeMinute,
    // useTime: undefined,
    people: peopleCount,
  });

  // console.log(`컴포넌트 랜더링 이후, 사람 수 ${reserveInfo.people}`);
  // console.log(reserveInfo);

  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    // console.log('첫번째 useEffect 들어옴...');

    setFormValid(isObjectFullyFilled(reserveInfo));
    // console.log(isFormValid);
  }, [reserveInfo]);

  const handleCount = (item) => {
    setPeopleCount(item);
  };
  useEffect(() => {
    // console.log('두번째 useEffect 동작중...!!!!!!!');
    setReserveInfo({ ...reserveInfo, people: peopleCount });
  }, [peopleCount]);

  const hours = [];
  for (let i = 9; i <= 21; i++) {
    hours.push(i);
  }

  return (
    <div className='flex flex-col bg-[#d9d9d9] pb-[100px]'>
      <section className='bg-gray4'>
        <div className='p-4 py-6 flex flex-col gap-2 bg-[#0D51FF] rounded-b-2xl'>
          <p className='text-xl font-extrabold text-white'>Smash {params.id}</p>
          <p className='text-sm font-thin text-gray2'>
            {params.id}번 방 상세정보 ...
          </p>
        </div>
      </section>
      <section className='py-2 px-4 bg-gray4 mb-[1px]'>
        <p className='text-lg font-bold'>예약 날짜</p>
        <Calandar data={reserveInfo} reserveInfo={setReserveInfo} />
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
        <p className='flex items-center gap-1 font-bold text-lg'>예약시간</p>
        <div className='flex justify-around border-b text-sm text-gray1'>
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
        <p className='text-xs pt-3 pl-3 text-gray1'>
          최소 30분 최대 2시간 이용 가능
        </p>
        {selectUse ? (
          <div className='flex'>
            <TimePicker
              isStart={true}
              flag={'startLange'}
              getInfoData={reserveInfo}
              setInfoData={setReserveInfo}
              pickList={['오전', '오후']}
              onSelectedChange={setStartTimeLange}
            />
            <TimePicker
              isStart={true}
              flag={'startHour'}
              getInfoData={reserveInfo}
              setInfoData={setReserveInfo}
              pickList={selectHour}
              onSelectedChange={setStartTimeHour}
            />
            <TimePicker
              isStart={true}
              flag={'startMinute'}
              getInfoData={reserveInfo}
              setInfoData={setReserveInfo}
              pickList={['00', '30']}
              onSelectedChange={setStartTimeMinute}
            />
          </div>
        ) : (
          <div className='flex'>
            <TimePicker
              isStart={false}
              flag={'endLange'}
              getInfoData={reserveInfo}
              setInfoData={setReserveInfo}
              pickList={['오전', '오후']}
              onSelectedChange={setEndTimeLange}
            />
            <TimePicker
              isStart={false}
              flag={'endHour'}
              getInfoData={reserveInfo}
              setInfoData={setReserveInfo}
              pickList={selectHour}
              onSelectedChange={setEndTimeHour}
            />
            <TimePicker
              isStart={false}
              flag={'endMinute'}
              getInfoData={reserveInfo}
              setInfoData={setReserveInfo}
              pickList={['00', '30']}
              onSelectedChange={setEndTimeMinute}
            />
          </div>
        )}
      </section>
      <section className='px-4 bg-gray4 mb-1 py-2'>
        <p className='flex items-center gap-1 font-bold text-lg mb-3'>
          인원 수
        </p>
        <div className='flex gap-3 overflow-x-auto mb-2'>
          {selectPeople.map((item, index) =>
            peopleCount == item ? (
              <button
                key={index}
                className='bg-gray4 px-3 py-1 rounded-xl border border-blue-200 text-[#0D51FF]'
              >
                {item}
              </button>
            ) : (
              <button
                key={index}
                className='bg-gray3 px-3 py-1 rounded-xl'
                onClick={() => handleCount(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
      </section>
      <section className='px-4 bg-gray4'>비품 목록</section>
      {reserveInfo && (
        <div className='fixed bottom-[49px] z-50 px-4 py-2 bg-gray4 border-t border-[#0D51FF] text-[#0D51FF] w-full h-[50px]'>
          {`${reserveInfo.year}.${reserveInfo.month}.${reserveInfo.date}(${reserveInfo.day}), `}
          {startTimeLange && `${startTimeLange} `}
          {startTimeHour && `${startTimeHour}:`}
          {startTimeMinute && `${startTimeMinute} ~`}
          {endTimeLange && ` ${endTimeLange}`}
          {endTimeHour && ` ${endTimeHour}`}
          {endTimeMinute && `:${endTimeMinute}`}
          {peopleCount && `, ${peopleCount}`}
        </div>
      )}
      <section
        className={`fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center text-gray0 border-t-[1px] border-gray1 w-full h-[50px]`}
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
