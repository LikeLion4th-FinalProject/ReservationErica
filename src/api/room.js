import { client } from './client';

export const getRoomType = async () => {
  await client
    .get('rooms/')
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));
};
