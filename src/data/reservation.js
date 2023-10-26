import axios from 'axios';
import { client } from './client';

export const searchDayTable = (selectedDate) => {
  client
    .get('searchdaytable/', { date: selectedDate.pickDate, type: 'smash' })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};
