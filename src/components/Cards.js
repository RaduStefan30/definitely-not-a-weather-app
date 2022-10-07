import { useState } from "react";

import Card from "../components/Card";

const Cards = () => {
  const days = [27, 28, 29, 30, 1, 2, 3];

  const [selectedDay, setSelectedDay] = useState(days[0]);

  let classes = "content__day";

  const handleClick = (day) => {
    setSelectedDay(day);
  };

  return (
    days &&
    days.map((day) => {
      if (selectedDay === day) {
        classes = "content__day selected__day";
      } else {
        classes = "content__day";
      }
      return (
        <Card
          day={day}
          key={day}
          classes={classes}
          onClick={() => handleClick(day)}
        />
      );
    })
  );
};

export default Cards;
