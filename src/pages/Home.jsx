import { useEffect, useState } from 'react';
import SplashPage from '../components/SplashPage';
function Home() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, [])
  if(showSplash) 
  return (
    <SplashPage/>
  );
  return (
    <section>
      hi
    </section>
  )
}

export default Home;



