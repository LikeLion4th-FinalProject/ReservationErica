import axios from "axios";

export const handleLogin = async () => {
  const username = sessionStorage.getItem("username");
  const kakao_id = sessionStorage.getItem("kakao_id");
  if (!username || !kakao_id) {
    console.error("username 혹은 kakao_id를 찾을 수 없습니다.");
    return;
  }

  try {
    const response = await axios.post(
      import.meta.env.VITE_REACT_APP_API_URL + "login",
      {
        username,
        kakao_id,
      }
    );
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("로그인 요청 중 오류가 발생했습니다:", error);
  }
};
