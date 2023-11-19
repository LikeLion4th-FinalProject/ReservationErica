import { requestDate, timeToLange } from '../utils/requestDateInfo';
import { client } from './client';

const userId = sessionStorage.getItem('kakao_id');

export const getMyReservation = async () => {
  return await client
    .post('searchmyreservation/', {
      kakao_id: userId,
      current_date: requestDate(),
      current_index: timeToLange(),
    })
    .then((response) => {
      console.log(response.data);
      // 예약한 정보가 있으면 true / 없으면 false 리턴
      if (response.data.error) return false;
      else return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const cancelMyReservation = async (roomName, date) => {
  return await client
    .post('deletereservation/', {
      room_name: roomName,
      date: date,
      kakao_id: userId,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
