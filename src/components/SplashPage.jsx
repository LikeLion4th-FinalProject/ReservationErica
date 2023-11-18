import { SyncLoader } from 'react-spinners';
import MainImage from '../assets/taskHYU.png';
import { useEffect, useState } from 'react';

function SplashPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); 
  }, []);

  return (
    <section className={`flex absolute flex-col justify-center items-center gap-4 h-[100vh] z-[99] bg-white w-full top-0 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
      <img src={MainImage} alt="SplashImage" className="w-3/5 object-cover" />
      <h1 className='extrabold text-[50px] text-primary'>자리있소융</h1>
      <SyncLoader color="#6990F5" margin={12} size={15} speedMultiplier={0.7} />
    </section>
  );
}

export default SplashPage;
