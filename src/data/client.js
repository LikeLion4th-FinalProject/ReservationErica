import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
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
    if (error.response.status === 401) {
      if (
        error.response.data.messages[0].message ===
        'Token is invalid or expired'
      ) {
        console.log(
          '토큰이 만료되어씀.. refresh 토큰을 백에 보내서 새로운 토큰값 받아오고, 다시 헤더에 담아야함'
        );
      }

      // const accessToken = getToken();

      // error.config.headers = {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${accessToken}`,
      // };

      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
  }
);
