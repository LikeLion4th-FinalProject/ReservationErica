import { client } from './client';

export const getToken = () => {
  const username = sessionStorage.getItem('kakaoUserName');
  const kakao_id = sessionStorage.getItem('kakaoUserId');

  if ((username, kakao_id)) {
    const userInfo = { username: username, kakao_id: kakao_id };
    console.log(userInfo);
    client
      .post('login/', userInfo)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem('token', response.data.token);
      })
      .catch((error) => console.log(error));
  } else {
    console.log('sessionStorage에서 값을 가져오지 못함');
  }
};
