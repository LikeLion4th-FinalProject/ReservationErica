import { useState } from 'react';
import DateDropdown from '../components/DateDropdown';
import IndicatorSection from '../components/IndicatorSection';
import PlaceCard from '../components/PlaceCard';
import { RoomList } from '../styles/static';
import TimeSelect from '../components/TimeSelect';

function ReserveHome() {
  const [selectedDate, setSelectedDate] = useState({
    pickDate: undefined,
    pickDay: undefined,
  });
  console.log(selectedDate);

  return (
    <section className='mt-4 relative'>
      <DateDropdown
        onDateSelect={setSelectedDate}
        selectedDate={selectedDate}
      />
      <IndicatorSection />
      <div className='px-4 mt-5'>
        <TimeSelect selectedDate={selectedDate} />
        {/* {RoomList.map((room, index) => (
          <PlaceCard key={index} idx={index} title={room} />
        ))} */}
      </div>
    </section>
  );
}

export default ReserveHome;
