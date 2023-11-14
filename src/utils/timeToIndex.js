export const timeToLange = () => {
  const today = new Date();
  let answer = 0;
  // 09시 이전일 경우 => 0을 리턴
  if (today.getHours() < 9) {
    console.log('현재 9시 이전입니다.');
    return 0;
  }
  // 22시 이후 일 경우 => 다음날짜의 0번으로 보내야함
  if (today.getHours() >= 22) {
    console.log('현재 22시 이후입니다.');
    return 25;
  }
  // 09 ~ 22시 일 경우 해당 값에 알맞은 index 값 리턴
  if (today.getMinutes() < 30) {
    answer = today.getHours() * 2;
  } else {
    answer = today.getHours() * 2 + 1;
  }
  return answer - 18;
};
