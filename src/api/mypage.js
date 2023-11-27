import { requestDate, timeToLange } from "../utils/requestDateInfo";
import { client } from "./client";

export const getMyReservation = async () => {
  const userId = sessionStorage.getItem("kakao_id");
  return await client
    .post("searchmyreservation/", {
      kakao_id: userId,
      current_date: requestDate(),
      // current_date: "2023-11-26",
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
  const userId = sessionStorage.getItem("kakao_id");
  return await client
    .post("deletereservation/", {
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

export const extendReservation = async (roomName, date) => {
  const userId = sessionStorage.getItem("kakao_id");
  return await client
    .post("extendreservation/", {
      room_name: roomName,
      date: date,
      kakao_id: userId,
    })
    .then((response) => {
      console.log(response.date);
      if (response.data.timetable) {
        console.log("누가 예약을 해놔서 연장이 불가능함");
        return false;
      } else return true;
    })
    .catch((error) => console.log(error));
};
