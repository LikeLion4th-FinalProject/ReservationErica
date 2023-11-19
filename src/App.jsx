import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BtnNav from './components/BtnNav';
import { createContext, useEffect, useState } from 'react';
export const setPage = createContext();

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const hideLayout =
    location.pathname === '/signup' || location.pathname === '/login';
  // const [title, setTitle] = useState('Home');
  // console.log(location);
  // useEffect(() => {
  //   if (location.pathname === '/mypage/reserveRecord') {
  //     setTitle('예약기록');
  //   }
  // }, [location]);
  const [componentPage, setComponentPage] = useState(1);
  console.log(componentPage);
  let title;
  let backHandler = () => navigate(-1);
  switch (location.pathname) {
    case '/mypage/:id':
      title = '마이페이지';
      break;
    case '/mypage/reserveRecord':
      title = '예약기록';
      break;
    case '/suggest':
      title = '건의하기';
      backHandler =
        componentPage === 1
          ? () => navigate(-1)
          : () => setComponentPage(componentPage - 1);
      break;
    case '/reservation':
      title = '예약하기';
      backHandler =
        componentPage === 1
          ? () => navigate(-1)
          : () => setComponentPage(componentPage - 1);
      break;
    case '/mypage/before-suggest':
      title = '건의내역';
      backHandler =
        componentPage === 1
          ? () => navigate(-1)
          : () => setComponentPage(componentPage - 1);
      break;
  }

  return (
    <setPage.Provider value={{ componentPage, setComponentPage }}>
      <div className='flex flex-col h-screen justify-between'>
        {!hideLayout && <Header title={title} backHandler={backHandler} />}
        <div className='flex-grow overflow-y-scroll'>
          <Outlet />
        </div>
        {!hideLayout && <BtnNav />}
      </div>
    </setPage.Provider>
  );
}

export default App;
