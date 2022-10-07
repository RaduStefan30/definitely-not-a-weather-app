import { useEffect, useState } from "react";
import "./Card.css";

const Card = (props) => {
  const { day } = props;

  return (
    <div onClick={props.onClick} className={props.classes}>
      {day}
    </div>
  );
};

export default Card;
