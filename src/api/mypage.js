import { client } from "./client";

export const searchMyReservation = async () => {
  const username = sessionStorage.getItem("username");
  const kakao_id = sessionStorage.getItem("kakao_id");

  console.log(username);

  const myPageInfo = await client
    .get(`searchmyreservation/${username}/2023-10-12/10`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));

  return myPageInfo;
};
