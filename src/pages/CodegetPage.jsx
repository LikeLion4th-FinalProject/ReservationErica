import axios from "axios";
import { useEffect, useState } from "react";
import { Rest_api_key, redirect_uri } from "../static";

function CodegetPage() {
  const [userData, setUserData] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const code = new URL(window.location.href).searchParams.get("code");

  const getKaKaoToken = async () => {
    try {
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        {
          grant_type: "authorization_code",
          client_id: Rest_api_key,
          redirect_uri: redirect_uri,
          code: code,
        },
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );
      setUserToken(res.data.access_token);
    } catch (error) {
      console.error("Error fetching access token: ", error.response.data);
    }
  };

  const getKaKaoUserData = async (access_token) => {
    try {
      const res = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setUserData(res.data);
      console.log("User Data: ", res.data);
    } catch (error) {
      console.error("Error fetching user data: ", error.response.data);
    }
  };

  useEffect(() => {
    if (code) {
      getKaKaoToken();
    }
  }, [code]);

  useEffect(() => {
    if (userToken) {
      getKaKaoUserData(userToken);
    }
  }, [userToken]);

  return (
    <div>
      {userData && (
        <>
          <h2>Welcome, {userData.properties.nickname}!</h2>
        </>
      )}
    </div>
  );
}

export default CodegetPage;
