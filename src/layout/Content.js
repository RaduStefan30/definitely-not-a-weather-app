import Moment from "react-moment";
import "./Content.css";
import Cards from "../components/Cards";
import Astro from "../components/Astro";
import Hourly from "../components/Hourly";

const Content = () => {
  return (
    <div className="content__container">
      <div className="content__main">
        <div className="content__main--days">
          <Cards />
        </div>
        <div className="content__main--astro">
          <Astro />
        </div>
      </div>
      <div className="content__side">
        <Hourly />
      </div>
    </div>
  );
};

export default Content;
