import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const client = axios.create({
  baseURL: BASE_URL,
});

// header에 정보 추가하기 => [참고자료] https://leeseong010.tistory.com/133
client.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  config.headers['Content-Type'] = 'application/json';
  if (token) {
    console.log(`token : ${token}`);
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log('404 페이지로 넘어가야 함!');
    }
    return response;
  },
  async (error) => {
    // console.log(error);
    if (error.response && error.response.status === 401) {
      console.log('토큰이 만료되어씀.. refresh_token으로 토큰갱신 시작');
      const refresh_token = sessionStorage.getItem('refresh_token');
      // console.log(refresh_token);
      await axios
        .post(`${BASE_URL}/refresh-token/`, {
          refresh_token: refresh_token,
        })
        .then((response) => {
          // sessionStorage.removeItem('token');
          console.log(response.data);
          sessionStorage.setItem('token', response.data.access_token);
          error.config.headers[
            'Authorization'
          ] = `Bearer ${response.data.access_token}`;
          const res = axios.request(error.config);
          console.log('res 뭐지 ? : ', res);
          return res;
        })
        // refresh token이 만료된경우 -> 재로그인 유도
        .catch((err) => {
          // console.log(err);
          console.log('refresh token도 만료됨 -> 재로그인 ㄱㄱ');
          sessionStorage.clear();
          window.location.replace('/re-login');
        });
    }
    return Promise.reject(error);
  }
);

// client.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token");
//   if (token) {
//     console.log(token : ${token});
//     config.headers["Authorization"] = Bearer ${token};
//   }
//   return config;
// });

// client.interceptors.response.use(
//   (response) => {
//     if (response.status === 404) {
//     }
//     return response;
//   },
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       const refresh_token = sessionStorage.getItem("refresh_token");
//       try {
//         const { data } = await axios.post(${BASE_URL}/refresh-token/, {
//           refresh_token: refresh_token,
//         });
//         sessionStorage.setItem("token", data.access_token);
//         error.config.headers["Authorization"] = Bearer ${data.access_token};
//         return client.request(error.config);
//       } catch (refreshError) {
//         // 사용자 로그아웃 또는 에러 처리 필요함
//       }
//     }
//     return Promise.reject(error);
//   }
// );
