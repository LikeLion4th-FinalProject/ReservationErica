import SmashImage from '../assets/SmashRoom.jpeg';
import roomDetails from '../static/SmashInfo';
import { FiClock } from 'react-icons/fi';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';


function ReserveType() {
  const INFO_STYLE = 'text-[14px] flex items-center gap-3 text-white semibold opacity-80';
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${SmashImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const navigate = useNavigate();

  return (
    <section className='w-full flex flex-col items-center py-4'>
      <div 
      onClick={() => navigate('/reservation/smash')}
      className='w-[90%] flex flex-col justify-between relative rounded-xl h-[180px] text-white p-6' style={backgroundStyle}>
        <h1 className='text-2xl'>{roomDetails.title}</h1>
        <div className='flex flex-col gap-2'>
        <span className="text-xs text-gray1 opacity-80 tracking-widest">
          {roomDetails.equipment}
        </span>
        <span className={`${INFO_STYLE}`}>
          <FiClock color='' size={18} />
          {roomDetails.time}
        </span>
        <span className={INFO_STYLE}>
          <FaLocationDot size={18} />
          {roomDetails.location}
        </span>
        </div>
      </div>
    </section>
  );
}

export default ReserveType;
