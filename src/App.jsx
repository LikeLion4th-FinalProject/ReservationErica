import { Outlet, useLocation } from 'react-router';
import './App.css';
import Header from './components/Header';
import BtnNav from './components/BtnNav';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const hideLayout =
    location.pathname === '/signup' || location.pathname === '/login';
  // const [title, setTitle] = useState('Home');
  // console.log(location);
  // useEffect(() => {
  //   if (location.pathname === '/mypage/reserveRecord') {
  //     setTitle('예약기록');
  //   }
  // }, [location]);
  let title = 'Home';
  if (location.pathname === '/mypage/reserveRecord') {
    title = '예약기록';
  }
  return (
    <>
      {!hideLayout && <Header title={title} />}
      <div className='overflow-y-scroll'>
        <Outlet />
      </div>
      {!hideLayout && <BtnNav />}
    </>
  );
}

export default App;
