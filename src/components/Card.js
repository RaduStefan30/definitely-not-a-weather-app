import "./Card.css";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";

const Card = (props) => {
  const { day, details, onClick, classes } = props;

  const content = classes.includes("selected__day") ? (
    <BigCard day={day} details={details} />
  ) : (
    <SmallCard day={day} details={details} />
  );

  return (
    <div onClick={onClick} className={classes}>
      {content}
    </div>
  );
};

export default Card;
