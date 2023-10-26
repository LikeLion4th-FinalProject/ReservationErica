import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useKakaoLogin from '../hooks/useKakaoLogin';
import { getToken } from '../data/login';

function CodegetPage() {
  const code = new URL(window.location.href).searchParams.get('code');
  const userData = useKakaoLogin(code);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      getToken(); // 로그인된 정보를 백으로 보내 토큰값 받아와서 세션스토리지에 넣는 함수

      // TODO: 서버로 액세스 토큰을 전송하여 사용자 확인
      // 사용자가 데이터베이스에 있다면
      // navigate("/reservation");
      // 사용자가 데이터베이스에 없다면
      navigate('/reservation');
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
