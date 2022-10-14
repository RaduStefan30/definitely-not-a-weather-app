import "./HourCard.css";
const HourCard = (props) => {
  const { time, hour } = props;

  return (
    <div className="hour__card">
      <div className="hour__card--side hour__card--front">
        <img
          src={hour.condition.icon}
          alt="weather icon"
          className="card__icon--big"
        />
        <span>{time}:00</span>
      </div>
      <div className="hour__card--side hour__card--back">
        <div className="card__text">
          <span className="card__label">Temp: </span>
          {Math.round(hour.temp_c)} &deg; C
        </div>
        <div className="card__text">
          <span className="card__label">Real Feel: </span>
          {Math.round(hour.temp_c)}&deg; C
        </div>
        <div className="card__text">
          <span className="card__label">Rain Chance: </span>
          {Math.round(hour.chance_of_rain)}%
        </div>
        <div className="card__text">
          <span className="card__label">Wind: </span>
          {hour.wind_kph} kph
        </div>
        <div className="card__text">
          <span className="card__label">Wind Direction: </span>
          {hour.wind_dir}
        </div>
      </div>
    </div>
  );
};

export default HourCard;
