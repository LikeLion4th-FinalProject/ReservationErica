import { client } from './client';

export const recordSuggest = async (userId) => {
  return await client
    .post('readfeedback/', { kakao_id: userId })
    .then((response) => {
      console.log(response.data);
      if (response.data.length === 0) return false;
      else return response.data;
    })
    .catch((error) => console.log(error));
};
