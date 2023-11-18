
import SmashImage from '../assets/SmashRoom.jpeg';
import roomDetails from '../static/SmashInfo';
import { FiClock } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
function ReserveType() {
  const INFO_STYLE = 'text-[14px] flex items-center gap-3'
  return (
    <section className='w-full flex flex-col items-center py-4'>
      <div className='w-4/5 flex flex-col relative rounded-xl h-[200px] bg-smashgradient text-white p-4'>
          <h1>{roomDetails.title}</h1>
          <span className={INFO_STYLE}>
          {roomDetails.equipment}</span>
          <span className={INFO_STYLE}>
          <FiClock/>
          {roomDetails.time}</span>
          <span className={INFO_STYLE}>
          <FaLocationDot />
          {roomDetails.location}</span>
      </div>
    </section>
  );
}

export default ReserveType;

