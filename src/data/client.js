import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

// header에 정보 추가하기 => [참고자료] https://leeseong010.tistory.com/133
client.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  config.headers['Content-Type'] = 'application/json';
  if (token) {
    console.log('token 있을때만 실행');
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// client.interceptors.response.use(
//   (response) => {
//     if (response.status === 404) {
//       console.log('404 페이지로 넘어가야 함!');
//     }

//     return response;
//   },
//   async (error) => {
//     if (error.response?.status === 401) {
//       if (isTokenExpired()) await tokenRefresh();

//       const accessToken = getToken();

//       error.config.headers = {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`,
//       };

//       const response = await axios.request(error.config);
//       return response;
//     }
//     return Promise.reject(error);
//   }
// );
