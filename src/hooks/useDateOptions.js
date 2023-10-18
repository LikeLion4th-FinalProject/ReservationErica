import { useState, useEffect } from 'react';
import { dayList } from '../styles/static';

function useDateOptions() {
  const [options, setOptions] = useState([]);
  const today = new Date();

  useEffect(() => {
    const tempOptions = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      const formattedDate = date.toISOString().split('T')[0];
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
