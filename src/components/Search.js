import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  weatherActions,
  fetchWeatherData,
  fetchSuggestions,
} from "../store/weather";

const Search = () => {
  const suggestions = useSelector((state) => state.weather.suggestions);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("London");
  // const [searchItems, setSearchItems] = useState();

  const inputField = useRef();

  useEffect(() => {
    dispatch(fetchWeatherData(searchText));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(inputField.current.value);
    dispatch(fetchWeatherData(searchText));
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
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          ref={inputField}
          onChange={handleChange}
        ></input>
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {suggestions && (
        <div className="suggestions">
          {suggestions.map((item) => (
            <p
              key={item.id}
              onClick={() => handleClick(item.name)}
              onChange={() => handleChange(item.name)}
            >
              {item.name}, {item.region}, {item.country}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
