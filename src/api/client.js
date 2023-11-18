import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(
  (config) => {
    // console.log('인터셉터 요청 보냅니다잉');
    const token = sessionStorage.getItem("token");
    config.headers["Content-Type"] = "application/json";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    // console.log('인터셉터 response 찍어보자 : ', response.data);
    if (response.status === 404) {
      console.log("404 페이지로 넘어가야 함!");
    }
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log(
        "토큰이 만료되어씀.. refresh_token으로 토큰갱신 시작 : ",
        error.response
      );
      const refresh_token = sessionStorage.getItem("refresh_token");

      await axios
        .post(`${BASE_URL}refresh-token/`, {
          refresh_token: refresh_token,
        })
        .then((response) => {
          console.log(response.data);
          sessionStorage.setItem("token", response.data.access_token);
          error.config.headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${response.data.access_token}`,
          };
          const res = axios(error.config);
          console.log("res 뭐지 ? : ", res);
          return res;
        })
        // refresh token이 만료된경우 -> 재로그인 유도
        .catch((err) => {
          // console.log(err);
          console.log("refresh token도 만료됨 -> 재로그인 ㄱㄱ");
          sessionStorage.clear();
          window.location.replace("/re-login");
        });
    }
    return Promise.reject(error);
  }
);
