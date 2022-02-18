import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCountries = createAsyncThunk(
  "countries/load",
  async (countries, thunkAPI) => {
    // call the api for get /goals
    try {
      const response = await axios.get("http://localhost:3001/country");
      return response.data;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error.response.data);
    }
  }
);
export const getCountry = createAsyncThunk(
  "countries/get",
  async (countryId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/country/${countryId}`
      );
      return response.data;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error.response.data);
    }
  }
);

/* export const getCountry = createAsyncThunk(
  "countries/get",
  (countryId, thunkAPI) => {
    return axios
      .get(`http://localhost:3001/country/${countryId}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);
 */
export const searchCountry = createAsyncThunk(
  "countries/search",
  async (countryName, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/country?name=${countryName}`
      );
      return response.data;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadActivities = createAsyncThunk(
  "activities/load",
  async (activities, thunkAPI) => {
    // call the api for get /goals
    try {
      const response = await axios.get("http://localhost:3001/activity");
      return response.data;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error.response.data);
    }
  }
);

//primer paso: creo el slice, tengo que exportarlo!!!
export const createActivity = createAsyncThunk(
  "activity/create",
  async (activity, thunkAPI) => {
    console.log("esta es la activity " + activity);
    try {
      const response = await axios.post(
        `http://localhost:3001/activity`,
        activity
      );
      return response.data;
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error.response.data);
    }
  }
);

//primer paso: creo el slice, tengo que exportarlo!!!

let countrySlice = createSlice({
  // obj con props
  name: "countries",
  initialState: {
    status: "",
    countries: [],
    region: [],
    activities: [],
    subregion: [],
    countriesActivity: [],
    country: {}, // para cargar un solo pais
  },
  reducers: {
    orderAZ(state) {
      state.countries.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      if (state.region.length > 0)
        state.region.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
    },
    orderZA(state) {
      state.countries
        .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
        .reverse();
      if (state.region.length > 0)
        state.region
          .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
          .reverse();
    },
    orderAsc(state) {
      state.countries.sort((a, b) =>
        a.area > b.area ? 1 : a.area < b.area ? -1 : 0
      );
      if (state.region.length > 0)
        state.region.sort((a, b) =>
          a.area > b.area ? 1 : a.area < b.area ? -1 : 0
        );
    },
    orderDesc(state) {
      state.countries
        .sort((a, b) => (a.area > b.area ? 1 : a.area < b.area ? -1 : 0))
        .reverse();
      if (state.region.length > 0)
        state.region
          .sort((a, b) => (a.area > b.area ? 1 : a.area < b.area ? -1 : 0))
          .reverse();
    },
    filterByContinent(state, action) {
      /*  console.log(action.payload)  */

      state.region = state.countries.filter((c) => c.region === action.payload);
    },
   

    filterByActivity(state, action) {
      console.log(action.payload);
      state.countriesActivity = state.countries.filter((c) =>
        c.Activities.some((a) => a.name === action.payload)
      );
    },
  },
  extraReducers: {
    //manejo el fulfilled

    [loadCountries.fulfilled]: (state, action) => {
      state.status = "success";
      state.countries = action.payload;
    },

    [getCountry.fulfilled]: (state, action) => {
      state.status = "success";
      state.country = action.payload;
    },
    [searchCountry.fulfilled]: (state, action) => {
      state.status = "search exitoso";
      state.countries = action.payload;
    },

    [loadActivities.fulfilled]: (state, action) => {
      state.status = "success";
      state.activities = action.payload;
    },
    [createActivity.fulfilled]: (state, action) => {
      state.status = "success";
    },
  }, // para manejar el estado de las promesasa
});

export const {
  orderAZ,
  orderZA,
  orderAsc,
  orderDesc,
  filterByContinent,
  filterBySubRegion,
  filterByActivity,
} = countrySlice.actions;

export default countrySlice.reducer;
