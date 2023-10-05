import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

function Header({ title }) {
  const navigate = useNavigate(-1);
  const location = useLocation();

  let visible = true;

  switch (location.pathname) {
    case '/mypage':
      visible = false;
      break;
    default:
      visible = true;
  }
  return (
    <>
      {visible ? (
        <section className='h-[56px] w-full flex items-center justify-between px-4'>
          <div className='w-full flex items-center justify-between'>
            <FaArrowLeft
              onClick={() => navigate(-1)}
              size={24}
              className='text-gray0 cursor-pointer flex-[0.2]'
            />
            <h1 className='text-gray0 flex-[1.6] text-center'>{title}</h1>
            <div className='flex-[0.2]'></div>
          </div>
        </section>
      ) : (
        <div>마이페이지</div>
      )}
    </>
  );
}

export default Header;
