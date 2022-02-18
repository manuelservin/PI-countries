import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import Pagination from "../components/Countries/Countries/Pagination/Pagination";
import PaginatedCountries from "../components/PaginatedCountries";
import {
  loadActivities,
  loadCountries,
} from "../redux/reducers/CountrySlice/CountrySlice";

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

const Home = () => {
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
    dispatch(loadActivities());
  }, []);

  return (
    <>
      <PageContainer className="contenedor">
        <PaginatedCountries />
      </PageContainer>
    </>
  );
};

export default Home;
