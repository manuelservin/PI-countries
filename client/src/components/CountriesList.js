import React from "react";

import styled from "styled-components";

import Pagination from "./Pagination";

const CountriesList = ({ countries }) => {
  return (
    <>
      <CardContainer>
        <Pagination countries={countries} />
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 260px));
  grid-auto-rows: minmax(200px, auto);
  padding-top: 5em;
  justify-content: center;
  gap: 30px;
  background-color: ${({ theme }) => theme.background};
`;

export default CountriesList;
