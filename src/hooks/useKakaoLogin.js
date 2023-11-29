import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rest_api_key, redirect_uri } from '../static';

const useKakaoLogin = (code) => {
  const [userData, setUserData] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const fetchKakaoToken = async () => {
    try {
      const { data } = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        {
          grant_type: 'authorization_code',
          client_id: Rest_api_key,
          redirect_uri: redirect_uri,
          code: code,
        },
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );
      setUserToken(data.access_token);
    } catch (error) {
      console.error('Error fetching access token: ', error.response.data);
    }
  };

  /**
   * 

   axios.get('searchdaytable/')
   .then( (response) => console.log(response) )
   .catch( (error) => console.log(error) )

   * 
   */

  const fetchKakaoUserData = async (access_token) => {
    try {
      const { data } = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setUserData(data);
      console.log('data', data);
      sessionStorage.setItem('username', data.properties.nickname);
      sessionStorage.setItem('kakao_id', data.id.toString());
      sessionStorage.setItem('isAuthRequest', false);
    } catch (error) {
      console.error('Error fetching user data: ', error.response.data);
    }
  };

  useEffect(() => {
    if (code) {
      fetchKakaoToken();
    }
  }, [code]);

  useEffect(() => {
    if (userToken) {
      fetchKakaoUserData(userToken);
    }
  }, [userToken]);

  return userData;
};

export default useKakaoLogin;
