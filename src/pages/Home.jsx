import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SplashPage from '../components/SplashPage';
import HomeLogin from '../components/HomeLogin';

function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const accessToken = sessionStorage.getItem('kakao_id');
      if (accessToken) {
        navigate('/reservation');
      } else {
        setShowSplash(false);
      }
    }, 2000);
  }, [navigate]);

  if (showSplash) {
    return (
      <section className='h-screen w-full'>
        <SplashPage />
      </section>
    );
  }

  return (
    <section className='h-screen w-full'>
      <HomeLogin />
    </section>
  );
}

export default Home;
