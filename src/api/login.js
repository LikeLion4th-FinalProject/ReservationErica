import { client } from './client';

/* 로그인페이지에서 로그인 했을때 실행되는 함수
 * : 해당 함수가 실행되면 카카오로그인을 통해 얻은 정보를 백에 보내고, 돌려받은 토큰을 세션에 들어감
 */
export const getToken = () => {
  const username = sessionStorage.getItem('username');
  const kakao_id = sessionStorage.getItem('kakao_id');

  if ((username, kakao_id)) {
    const userInfo = { username: username, kakao_id: kakao_id };
    console.log(userInfo);
    client
      .post('login/', userInfo)
      .then((response) => {
        console.log('리턴받은 토큰 값  : ', response.data);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('refresh_token', response.data.refresh_token);
      })
      .catch((error) => console.log(error));
  } else {
    console.log('sessionStorage에서 값을 가져오지 못함');
  }
};
