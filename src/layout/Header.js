import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Header.css";

import Search from "../components/Search";

const Header = () => {
  const city = useSelector((state) => state.weather.city);
  return (
    <Fragment>
      <nav className="header">
        <span className="header__text">{city}</span> <Search />
      </nav>
    </Fragment>
  );
};

export default Header;
