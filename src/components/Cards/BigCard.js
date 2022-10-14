import "./BigCard.css";

const BigCard = (props) => {
  const { day, details } = props;
  return (
    <div className="card--big">
      <div className="card__header--big">{day}</div>
      <div className="card__content--big">
        <div className="card__content--left">
          <p className="card__temp--big">
            {Math.round(details.day.avgtemp_c)}&deg;
          </p>
          <div className="card__text">
            <span className="card__label">Humidity: </span>
            {details.day.avghumidity}%
          </div>
          <div className="card__text">
            <span className="card__label">Wind: </span>
            {details.day.maxwind_kph} kph
          </div>
        </div>
        <div className="card__content--right">
          <img
            src={details.day.condition.icon}
            alt="weather icon"
            className="card__icon--big"
          />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
