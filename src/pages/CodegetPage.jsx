import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useKakaoLogin from '../hooks/useKakaoLogin';
import { getToken } from '../api/login';
import { SyncLoader } from 'react-spinners';

function CodegetPage() {
  const code = new URL(window.location.href).searchParams.get('code');
  const userData = useKakaoLogin(code);
  const navigate = useNavigate();

  const fetchToken = async () => {
    try {
      const isValid = await getToken(); // Assuming getToken returns a promise
      if (isValid) navigate('/reservation');
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  useEffect(() => {
    if (userData) {
      fetchToken();
    }
  }, [userData]);

  return (
    <div>
      {userData ? (
        <div className='w-full h-screen flex justify-center items-center'>
          <SyncLoader
            color='#6990F5'
            margin={12}
            size={15}
            speedMultiplier={0.7}
          />
        </div>
      ) : (
        <div className='w-full h-screen flex justify-center items-center'>
          <SyncLoader
            color='#6990F5'
            margin={12}
            size={15}
            speedMultiplier={0.7}
          />
        </div>
      )}
    </div>
  );
}

export default CodegetPage;
