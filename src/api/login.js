import { client } from './client';

/* 로그인페이지에서 로그인 했을때 실행되는 함수
  -> 해당 함수가 실행되면 카카오로그인을 통해 얻은 정보를 백에 보내고, 돌려받은 토큰을 세션에 들어감
 */
export const getToken = async () => {
  const username = sessionStorage.getItem('username');
  const kakao_id = sessionStorage.getItem('kakao_id');

  if ((username, kakao_id)) {
    const userInfo = { username: username, kakao_id: kakao_id };
    console.log(userInfo);
    const isValid = await client
      .post('login/', userInfo)
      .then((response) => {
        console.log('리턴받은 토큰 값  : ', response.data);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('refresh_token', response.data.refresh_token);
        return true;
      })
      .catch((error) => console.log(error))
      .finally(() => sessionStorage.setItem('isAuthRequest', true));
    return isValid;
  } else {
    console.log('sessionStorage에서 값을 가져오지 못함');
  }
};

/* 
  Intercepter의 원리를 알았으니, 
  위의 코드처럼 intercepter를 사용한 client 인스턴스를 사용하던,
  아래처럼 그냥 axios를 사용하던 
  ... 결과는 동일 
*/

// import axios from 'axios';
// import { client } from './client';

// /* 로그인페이지에서 로그인 했을때 실행되는 함수
//  * : 해당 함수가 실행되면 카카오로그인을 통해 얻은 정보를 백에 보내고, 돌려받은 토큰을 세션에 들어감
//  */
// export const getToken = async () => {
//   const username = sessionStorage.getItem('username');
//   const kakao_id = sessionStorage.getItem('kakao_id');

//   if ((username, kakao_id)) {
//     const userInfo = { username: username, kakao_id: kakao_id };
//     console.log(userInfo);
//     const temp = await axios
//       .post(import.meta.env.VITE_APP_BASE_URL + 'login/', userInfo)
//       .then((response) => {
//         console.log('리턴받은 토큰 값  : ', response.data);
//         sessionStorage.setItem('token', response.data.token);
//         sessionStorage.setItem('refresh_token', response.data.refresh_token);
//         return true;
//       })
//       .catch((error) => console.log(error));
//     console.log(temp);
//     return temp;
//   } else {
//     console.log('sessionStorage에서 값을 가져오지 못함');
//   }
// };
