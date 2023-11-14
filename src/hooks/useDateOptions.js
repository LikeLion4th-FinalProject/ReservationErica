import { useState, useEffect } from 'react';
import { dayList } from '../styles/static';

function useDateOptions() {
  const [options, setOptions] = useState([]);

  const offset = new Date().getTimezoneOffset() * 60000; // ms 단위를 맞추기 위해 60000 곱해줌
  // const today = new Date(Date.now() - offset);
  const today = new Date();
  // console.log('today: ', today);
  useEffect(() => {
    const tempOptions = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      // console.log('이전 값 date : ', date);
      date.setDate(today.getDate() + i);
      // console.log('date : ', date, 'i : ', i);
      const offsetDate = new Date(date - offset);
      const formattedDate = offsetDate.toISOString().split('T')[0];
      // console.log('formattedDate : ', formattedDate);
      tempOptions.push({
        formattedDate: formattedDate,
        formattedDay: dayList[date.getDay()],
      });
    }
    setOptions(tempOptions);
  }, []);

  return options;
}

export default useDateOptions;
