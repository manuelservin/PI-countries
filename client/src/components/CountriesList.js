import React from "react";

import styled from "styled-components";
import CountriesItem from "./CountriesItem";

const CountriesList = ({ countries }) => {
  return (
    <CardContainer>
      {countries &&
        countries.map((country) => (
          <CountriesItem key={country.id} {...country} />
        ))}
    </CardContainer>
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
