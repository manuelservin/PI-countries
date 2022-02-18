import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../reducers/CountrySlice/CountrySlice";

export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});
