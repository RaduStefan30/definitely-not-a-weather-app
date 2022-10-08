import "./SmallCard.css";

const SmallCard = (props) => {
  const { day, details } = props;
  return (
    <div className="card--small">
      <div className="card__header--small">{day.slice(0, 3)}</div>
      <div className="card__content--small">
        <img
          src={details.day.condition.icon}
          alt="weather icon"
          className="card__icon--small"
        />
        <p className="card__text--small">
          {Math.round(details.day.avgtemp_c)}&deg;
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
