import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";

import "./Search.css";

import {
  weatherActions,
  fetchWeatherData,
  fetchSuggestions,
} from "../../store/weather";

const Search = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector((state) => state.weather.suggestions);

  const [searchText, setSearchText] = useState("London");

  const inputField = useRef();

  useEffect(() => {
    dispatch(fetchWeatherData(searchText));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(inputField.current.value);
    dispatch(fetchWeatherData(searchText));
    dispatch(weatherActions.removeSuggestions());
  };

  const handleClick = (e) => {
    setSearchText(e);
    dispatch(fetchWeatherData(e));
    inputField.current.value = e;
    dispatch(weatherActions.removeSuggestions());
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length >= 2) {
      dispatch(fetchSuggestions(e.target.value));
    } else {
      dispatch(weatherActions.removeSuggestions());
    }
  };

  return (
    <Fragment>
      <div className="suggestions">
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            ref={inputField}
            onChange={handleChange}
          ></input>
          <button type="submit" className="search__btn">
            <BsSearch />
          </button>
        </form>
        {suggestions &&
          suggestions.map((item, index) => (
            <div
              style={{ top: `${(index + 1.2) * 4}rem` }}
              className="suggestion"
              key={item.id}
              onClick={() => handleClick(item.name)}
              onChange={() => handleChange(item.name)}
            >
              {item.name}, {item.region.length < 10 && item.region + ","}{" "}
              {item.country}
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Search;
