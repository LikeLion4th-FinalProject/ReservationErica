import { client } from "./client";

export const searchMyReservation = async () => {
  //const username = sessionStorage.getItem("username");
  const kakao_id = sessionStorage.getItem("kakao_id");

  const data = {
    kakao_id: kakao_id,
    current_date: "2023-10-12",
    current_index: 10,
  };

  const myPageInfo = await client
    .post(`searchmyreservation/`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));

  return myPageInfo;
};
