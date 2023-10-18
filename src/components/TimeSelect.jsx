import React from 'react';

export default function TimeSelect({ selectedDate }) {
  function formatDateToDisplay(pickDate) {
    const options = { month: 'long', day: 'numeric' };
    const date = new Date(pickDate);
    return date.toLocaleDateString('ko-KR', options);
  }

  const formattedDate = formatDateToDisplay(selectedDate.pickDate);
  console.log(formattedDate); // "10월 23일"

  return <div>{formattedDate}</div>;
}
