export function calculateInitialStartTimeLange() {
  const today = new Date();
  let initialStartTimeLange = '';
  if (today.getHours() > 12) {
    initialStartTimeLange = '오후';
  } else {
    initialStartTimeLange = '오전';
  }
  return initialStartTimeLange;
}

export function calculateInitialStartTimeHour() {
  const today = new Date();
  let initialStartTimeHour = 0;

  if (today.getMinutes() < 30) {
    // 00~30 분 사이일 경우 초기 시간 조정
    if (today.getHours() > 12) {
      initialStartTimeHour = today.getHours() - 12;
    } else {
      initialStartTimeHour = today.getHours();
    }
  } else {
    // 30~60 분 사이일 경우 초기 시간 조정
    if (today.getHours() >= 12) {
      initialStartTimeHour = today.getHours() - 11;
    } else {
      initialStartTimeHour = today.getHours() + 1;
    }
  }
  return initialStartTimeHour;
}
export function calculateInitialStartTimeMinute() {
  const today = new Date();
  let initialStartTimeMinute = '';

  if (today.getMinutes() < 30) {
    // 00~30 분 사이일 경우 초기 시간 조정
    initialStartTimeMinute = '30';
  } else {
    // 30~60 분 사이일 경우 초기 시간 조정
    initialStartTimeMinute = '00';
  }
  return initialStartTimeMinute;
}

export function calculateInitialEndTimeLange(startLange, startHour) {
  let answer = '';
  if (startLange == '오전' && startHour >= 11) {
    answer = '오후';
  } else if (startLange == '오후' && startHour >= 11) {
    answer = '오전';
  } else answer = startLange;
  return answer;
}
export function calculateInitialEndTimeHour(startHour) {
  let answer = '';
  if (startHour == 12) {
    answer = 1;
  } else answer = startHour + 1;
  return answer;
}
