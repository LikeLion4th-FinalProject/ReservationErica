import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useKakaoLogin from '../hooks/useKakaoLogin';
import { handleLogin } from '../api/authlogin';
import { getToken } from '../api/login';

function CodegetPage() {
  const code = new URL(window.location.href).searchParams.get('code');
  const userData = useKakaoLogin(code);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      getToken(); // 로그인된 정보를 백으로 보내 토큰값 받아와서 세션스토리지에 넣는 함수

      navigate('/reservation');
      // handleLogin();
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
