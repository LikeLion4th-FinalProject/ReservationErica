export function isObjectFullyFilled(obj) {
  // let check = true;
  // Object.keys(obj).every((key) => {
  //   const value = obj[key];
  //   console.log(key, ' : ', value);
  //   // 여기에서 원하는 조건을 설정하여 값이 채워져 있는지 확인합니다.
  //   // 예를 들어, 값이 null 또는 undefined가 아닌 경우를 확인할 수 있습니다.
  //   if (value == null || value == undefined) check = false;
  // });
  // return check;

  let check = true;
  for (const [key, value] of Object.entries(obj)) {
    // console.log(`${key}: ${value}`);
    if (value == null || value == undefined) {
      // console.log(`${key}: ${value}`);
      check = false;
    }
  }
  return check;
}
