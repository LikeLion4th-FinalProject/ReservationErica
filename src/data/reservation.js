import { client } from './client';

export const searchDayTable = async (pickDate) => {
  const dayTableList = await client
    .get('searchdaytable/', { date: pickDate, type: 'smash' })
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));

  console.log(dayTableList);

  return dayTableList;
};
