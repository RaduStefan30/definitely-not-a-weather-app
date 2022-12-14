import { Fragment } from "react";
import { useSelector } from "react-redux";

import "./Astro.css";

const Astro = () => {
  const { dayDetails } = useSelector((state) => state.weather);
  const astro = dayDetails ? dayDetails.astro : null;
  return (
    <Fragment>
      {astro && (
        <div className="astro">
          <div className="astro--left">
            <img
              src="//cdn.weatherapi.com/weather/64x64/day/113.png"
              alt="sun icon"
              className="astro__image"
            />
            <div className="astro__text">
              <span className="card__label">Sunrise: </span>
              {astro.sunrise}
            </div>
            <div className="astro__text">
              <span className="card__label">Sunset: </span>
              {astro.sunset}
            </div>
          </div>
          <div className="astro--right">
            <img
              src="//cdn.weatherapi.com/weather/64x64/night/113.png"
              alt="sun icon"
              className="astro__image"
            />
            <div className="astro__text">
              <span className="card__label">Moonrise: </span>
              {astro.moonrise}
            </div>
            <div className="astro__text">
              <span className="card__label">Moonset: </span>
              {astro.moonset}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Astro;
