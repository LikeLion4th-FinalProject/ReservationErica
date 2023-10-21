import { useState } from 'react';
import DateDropdown from '../components/DateDropdown';
import IndicatorSection from '../components/IndicatorSection';
import PlaceCard from '../components/PlaceCard';
import { RoomList, dayList } from '../styles/static';
import TimeSelect from '../components/TimeSelect';
import ButtonList from '../components/ButtonList';

function ReserveHome() {
  // getTimezoneOffset()은 현재 시간과의 차이를 분 단위로 반환하는 함수 => 9시간 이므로 -540 이 나올거임
  const offset = new Date().getTimezoneOffset() * 60000; // ms 단위를 맞추기 위해 60000 곱해줌
  const today = new Date(Date.now() - offset);
  // console.log(today);

  const nowDate = today.toISOString().split('T')[0];
  // console.log(nowDate);

  const [selectedDate, setSelectedDate] = useState({
    pickDate: nowDate,
    pickDay: dayList[new Date().getDay()],
  });
  // console.log(selectedDate);

  return (
    <section className='mt-4 relative'>
      <DateDropdown
        onDateSelect={setSelectedDate}
        selectedDate={selectedDate}
      />
      <IndicatorSection />
      <div className='px-4 mt-5'>
        <TimeSelect selectedDate={selectedDate} nowDate={nowDate} />
        {/* {RoomList.map((room, index) => (
          <PlaceCard key={index} idx={index} title={room} />
        ))} */}
      </div>
      <ButtonList />
    </section>
  );
}

export default ReserveHome;
