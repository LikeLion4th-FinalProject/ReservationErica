import { useState, useEffect } from 'react';
import { dayList } from '../styles/static';

function useDateOptions() {
  const [options, setOptions] = useState([]);

  const offset = new Date().getTimezoneOffset() * 60000; // ms 단위를 맞추기 위해 60000 곱해줌
  // const today = new Date();
  const today = new Date(Date.now() - offset);
  // console.log(today);
  useEffect(() => {
    const tempOptions = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(Date.now() - offset);
      date.setDate(today.getDate() + i);
      // console.log(date);
      const formattedDate = date.toISOString().split('T')[0];
      // console.log(formattedDate);
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
