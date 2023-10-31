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
    if (error.response.status === 401) {
      if (
        error.response.data.messages[0].message ===
        'Token is invalid or expired'
      ) {
        console.log('토큰이 만료되어씀.. refresh 토큰 보내겠슴다');
        const refresh_token = sessionStorage.getItem('refresh_token');
        // console.log(refresh_token);
        axios
          .post(`${BASE_URL}/refresh-token/`, {
            refresh_token: refresh_token,
          })
          .then((response) => {
            // sessionStorage.removeItem('token');
            console.log(response.data);
            sessionStorage.setItem('token', response.data.access_token);
          });
      }

      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
  }
);
