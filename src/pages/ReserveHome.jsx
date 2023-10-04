import { useState } from 'react';
import DateDropdown from '../components/DateDropdown';
import IndicatorSection from '../components/IndicatorSection';
import PlaceCard from '../components/PlaceCard';
import { RoomList } from '../styles/static';

function ReserveHome() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className='mt-4 relative'>
      <DateDropdown
        onDateSelect={setSelectedDate}
        selectedDate={selectedDate}
      />
      <IndicatorSection />
      <div className='px-4 mt-5'>
        {RoomList.map((room, index) => (
          <PlaceCard key={index} idx={index} title={room} />
        ))}
      </div>
    </section>
  );
}

export default ReserveHome;
