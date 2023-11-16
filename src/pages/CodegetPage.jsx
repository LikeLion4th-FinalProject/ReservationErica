import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useKakaoLogin from '../hooks/useKakaoLogin';
import { getToken } from '../api/login';

function CodegetPage() {
  const code = new URL(window.location.href).searchParams.get('code');
  const userData = useKakaoLogin(code);
  const navigate = useNavigate();

  const fetchToken = async () => {
    try {
      const isValid = await getToken(); // Assuming getToken returns a promise
      console.log('isValid : ', isValid);
      if (isValid) navigate('/reservation');
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  useEffect(() => {
    console.log('걸리나?1');
    if (userData) {
      console.log('걸리나?2');
      fetchToken();
    }
  }, [userData]);

  return (
    <div>
      {userData ? (
        <h2>Welcome, {userData.properties.nickname}!</h2>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CodegetPage;
