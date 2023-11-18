import { useEffect, useState } from 'react';
import SplashPage from '../components/SplashPage';
import HomeLogin from '../components/HomeLogin';
function Home() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, [])
  if(showSplash) 
    return (
    <section className='h-screen w-full'>
        <SplashPage />
        </section>
  );
  return (
    <section className='h-screen w-full'>
      <HomeLogin/>
    </section>
  )
}

export default Home;



