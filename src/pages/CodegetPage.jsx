import axios from "axios";
import { useEffect, useState } from "react";

function CodegetPage() {
  const [userData, setUserData] = useState(null);
  const code = new URL(window.location.href).searchParams.get("code");

  const getKaKaoUserData = async (token) => {
    try {
      const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return kakaoUser.data;
    } catch (error) {
      console.error("Failed to fetch user data", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getKaKaoUserData(code);
      setUserData(data);
    };

    fetchUserData();
  }, [code]);

  return (
    <div>
      {code && <p>Code: {code}</p>}
      {userData && <p>User Data: {JSON.stringify(userData)}</p>}
    </div>
  );
}

export default CodegetPage;
