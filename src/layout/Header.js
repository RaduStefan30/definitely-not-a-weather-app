import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import { BsFillPinMapFill } from "react-icons/bs";

import Search from "../components/Search";

const Header = () => {
  const { city } = useSelector((state) => state.weather);

  return (
    <Fragment>
      <nav className="header">
        <span className="header__text">
          <BsFillPinMapFill className="header__icon" />
          {city}
        </span>
        <Search />
      </nav>
    </Fragment>
  );
};

export default Header;
