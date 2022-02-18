// quiero mostrar los paises, y sus filtros

import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import styled from "styled-components";
import CountriesList from "../components/CountriesList";
import {
  loadActivities,
  loadCountries,
} from "../redux/reducers/CountrySlice/CountrySlice";

const Home = () => {
  const dispatch = useDispatch();

  const [countries, setCountries] = useState();

  useEffect(() => {
    dispatch(loadCountries()).then(({ payload }) => setCountries(payload));
    dispatch(loadActivities());
  }, []);
  return <div>{countries && <CountriesList countries={countries} />}</div>;
};

export default Home;
