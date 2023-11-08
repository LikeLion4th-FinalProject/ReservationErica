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

  let title;
  switch (location.pathname) {
    case '/mypage/reserveRecord':
      title = '예약기록';
      break;
    case '/suggest':
      title = '건의하기';
      break;
    default:
      title = '예약하기';
      break;
  }

  return (
    <div className='flex flex-col h-screen justify-between'>
      {!hideLayout && <Header title={title} />}
      <div className='flex-grow overflow-y-scroll'>
        <Outlet />
      </div>
      {!hideLayout && <BtnNav />}
    </div>
  );
}

export default App;
