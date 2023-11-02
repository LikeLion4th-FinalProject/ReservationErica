import { client } from "./client";

export const searchDayTable = async (pickDate) => {
  const dayTableList = await client
    .get(`searchdaytable/${pickDate}/smash/`)
    // get 요청에는 body를 담아서 보낼 수 없음 -> params로 넣어서 보내면 될듯 (URL에 내용이 담김)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => console.log(error));

  // console.log(dayTableList);

  return dayTableList;
};
