import React from "react";
import DateLanguageHolder from "../UI/DateLanguageHolder";

const Calendar = (props) => {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();
  let meridian;
  if (hour >= 12) {
    meridian = "PM";
  } else {
    meridian = "AM";
  }

  if (hour > 12) {
    hour -= 12;
  } else if (hour === 12) {
    hour = 12;
  }

  if (minutes.toLocaleString().length === 1) {
    minutes = "0" + minutes;
  }

  console.log(props.hour);

  return (
    <>
      <DateLanguageHolder>
        <div>
          <p>
            {hour}:{minutes} {meridian}
          </p>
          <p>
            {date}/{month}/{year}
          </p>
        </div>
      </DateLanguageHolder>
    </>
  );
};

export default Calendar;
