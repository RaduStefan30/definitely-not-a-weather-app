import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { weatherActions } from "../store/weather";

import Card from "./Card";

const Cards = () => {
  const days = useSelector((state) => state.weather.days);
  const details = useSelector((state) => state.weather.details);

  const [selectedDay, setSelectedDay] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedDay(days[0]);
    if (details[0] != undefined)
      dispatch(weatherActions.changeDay({ day: details[0].date }));
  }, [days]);

  let classes = "content__day";

  const handleClick = (day, date) => {
    setSelectedDay(day);
    dispatch(weatherActions.changeDay({ day: date }));
  };

  return (
    days &&
    days.map((day, index) => {
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
          details={details[index]}
          onClick={() => handleClick(day, details[index].date)}
        />
      );
    })
  );
};

export default Cards;
