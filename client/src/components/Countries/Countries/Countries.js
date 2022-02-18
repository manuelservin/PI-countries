import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  loadCountries,
  loadActivities,
} from "../../../redux/reducers/CountrySlice/CountrySlice";

import styled from "styled-components";
import Filters from "./Options/Filters";
import Pagination from "./Pagination/Pagination";
import CountriesList from "./CountriesList";

const PageContainer = styled.div`
  .contenedor::-webkit-scrollbar:vertical {
    width: 10px;
  }

  div::-webkit-scrollbar-button:increment,
  body::-webkit-scrollbar-button:decrement {
    display: none;
  }

  .contenedor::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
  }

  body::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

const Countries = () => {
  var dispatch = useDispatch();
  const [countries, setCountries] = useState();
  useEffect(() => {
    dispatch(loadCountries()).then(({ payload }) => setCountries(payload));
    dispatch(loadActivities());
  }, []);

  return (
    <>
      <PageContainer className="contenedor">
        <Pagination />
        {/*<CountriesList countries={countries}/>*/}
      </PageContainer>
    </>
  );
};

export default Countries;
