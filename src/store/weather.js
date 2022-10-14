import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  city: "",
  days: [],
  suggestions: [],
  details: [],
  day: undefined,
  dayDetails: undefined,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather(state, action) {
      state.city = action.payload.city;
      state.days = action.payload.days;
      state.details = action.payload.details;
    },
    changeSuggestions(state, action) {
      state.suggestions = action.payload.suggestions;
    },
    removeSuggestions(state, action) {
      state.suggestions = [];
    },
    changeDay(state, action) {
      state.day = action.payload.day;
      const details = state.details.filter((item) => item.date === state.day);
      state.dayDetails = details[0];
    },
  },
});

export const fetchWeatherData = (searchText = "London") => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=02043fb233904559812103820220610&q=${searchText}&days=7&aqi=yes&alerts=no`
      );
      if (response.status !== 200) {
        throw new Error("Could not fetch weather data!");
      }
      return response.data;
    };

    try {
      const data = await fetchData();
      const days = data.forecast.forecastday.map((day) => {
        const date = new Date(day.date);
        return date.toLocaleDateString("en-EN", { weekday: "long" });
      });

      dispatch(
        weatherSlice.actions.getWeather({
          city: data.location.name + ", " + data.location.country,
          days,
          details: data.forecast.forecastday,
        })
      );
    } catch (err) {
      //   dispatch(
      //     notificationActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Fetching data failed!",
      //     })
      //   );
      console.log(err);
    }
  };
};

export const fetchSuggestions = (searchText = "London") => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios(
        `https://api.weatherapi.com/v1/search.json?key=02043fb233904559812103820220610&q=${searchText}`
      );
      if (response.status !== 200) {
        throw new Error("Could not fetch weather data!");
      }
      return response.data;
    };

    try {
      const data = await fetchData();
      const suggestions = data.map((item) => {
        return item;
      });
      console.log(suggestions);
      dispatch(
        weatherSlice.actions.changeSuggestions({
          suggestions,
        })
      );
    } catch (err) {
      //   dispatch(
      //     notificationActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Fetching data failed!",
      //     })
      //   );
      console.log(err);
    }
  };
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
