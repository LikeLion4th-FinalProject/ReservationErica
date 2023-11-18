import { client } from './client';

export const recordSuggest = async (userId) => {
  const response = await client
    .post('readfeedback/', { kakao_id: userId })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
  return response;
};
