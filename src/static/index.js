const redirect_uri = "http://localhost:5173/auth/kakao/callback";
const Rest_api_key = import.meta.env.VITE_REST_API_KEY;
export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
