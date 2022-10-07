import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  city: "",
  suggestions: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    changeWeather(state, action) {
      state.city = action.payload.city;
    },
    changeSuggestions(state, action) {
      state.suggestions = action.payload.suggestions;
    },
    removeSuggestions(state, action) {
      state.suggestions = [];
    },
  },
});

export const fetchWeatherData = (searchText = "London") => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=02043fb233904559812103820220610&q=${searchText}&days=8&aqi=yes&alerts=no`
      );
      if (response.status !== 200) {
        throw new Error("Could not fetch weather data!");
      }
      return response.data;
    };

    try {
      const data = await fetchData();
      dispatch(
        weatherSlice.actions.changeWeather({
          city: data.location.name,
        })
      );
    } catch (err) {
      //   dispatch(
      //     notificationActions.showNotification({
      //       status: "error",
      //       title: "Error!",
      //       message: "Fetching cart data failed!",
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
      console.log(response.data);
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
      //       message: "Fetching cart data failed!",
      //     })
      //   );
      console.log(err);
    }
  };
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
