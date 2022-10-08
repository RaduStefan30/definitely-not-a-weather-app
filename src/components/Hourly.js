import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import HourCard from "./HourCard";
import "./Hourly.css";

const Hourly = () => {
  const { dayDetails } = useSelector((state) => state.weather);
  const [isAM, setIsAM] = useState("AM");

  const toggleTime = (e) => {
    setIsAM(e);
  };

  return (
    <Fragment>
      <div className="header__hourly">
        <h1>Hourly Conditions</h1>
        <select
          className="hour__select"
          onChange={(e) => {
            toggleTime(e.target.value);
          }}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      <div className="content__hourly">
        {dayDetails &&
          dayDetails.hour.map((hour) => {
            const time = new Date(hour.time);
            if (isAM === "AM" && time.getHours() < 12)
              return (
                <HourCard hour={hour} key={hour.time} time={time.getHours()} />
              );
            else if (isAM === "PM" && time.getHours() >= 12)
              return (
                <HourCard hour={hour} key={hour.time} time={time.getHours()} />
              );
          })}
      </div>
    </Fragment>
  );
};

export default Hourly;
