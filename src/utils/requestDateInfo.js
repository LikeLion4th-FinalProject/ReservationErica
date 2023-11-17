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
    return 0;
  }
  // 09 ~ 22시 일 경우 해당 값에 알맞은 index 값 리턴
  if (today.getMinutes() < 30) {
    answer = today.getHours() * 2;
  } else {
    answer = today.getHours() * 2 + 1;
  }
  return answer - 18;
};

export const requestDate = () => {
  const today = new Date();
  // getTimezoneOffset()은 현재 시간과의 차이를 분 단위로 반환하는 함수 => 9시간 이므로 -540 이 나올거임
  const offset = new Date().getTimezoneOffset() * 60000; // ms 단위를 맞추기 위해 60000 곱해줌
  const offsetToday = new Date(Date.now() - offset);
  const temp = new Date(Date.now() - offset);
  temp.setDate(offsetToday.getDate() + 1);

  if (today.getHours() >= 22) {
    console.log(
      '22시 이후 요청 보내는 날짜 : ',
      temp.toISOString().split('T')[0]
    );
    return temp.toISOString().split('T')[0];
  } else {
    console.log('요청보내는 날짜 : ', offsetToday.toISOString().split('T')[0]);
    return offsetToday.toISOString().split('T')[0];
  }
};
