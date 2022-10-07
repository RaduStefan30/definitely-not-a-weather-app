import { useState } from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import "./Content.css";
import Cards from "../components/Cards";
const Content = () => {
  return (
    <div className="content__container">
      <div className="content__main">
        <div className="content__main--days">
          <Cards />
        </div>
        <div className="content__main--details">Jos</div>
      </div>
      <div className="content__side">Dreapta</div>
    </div>
  );
};

export default Content;
