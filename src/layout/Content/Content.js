import "./Content.css";
import Cards from "../../components/Cards/Cards";
import Astro from "../../components/Astro/Astro";
import Hourly from "../../components/Hourly/Hourly";

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
