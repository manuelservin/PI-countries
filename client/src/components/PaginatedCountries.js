import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { NavigateBefore } from "@styled-icons/material-outlined/NavigateBefore";
import { NavigateNext } from "@styled-icons/material-outlined/NavigateNext";
import { loadCountries } from "../redux/reducers/CountrySlice/CountrySlice";
import CountriesItem from "./CountriesItem";

const PaginatedCountries = () => {
  let countries = useSelector((state) => state.countries.countries);

  const region = useSelector((state) => state.countries.region);
  const subregion = useSelector((state) => state.countries.subregion);
  if (subregion && subregion.length > 0) {
    countries = subregion;
  }
  const dispatch = useDispatch();
  const filterActivity = useSelector(
    (state) => state.countries.countriesActivity
  );

  if (region && region.length > 0) {
    countries = region;
  }

  if (filterActivity && filterActivity.length > 0) {
    countries = filterActivity;
  }
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(countries.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage; //obtengo indicce
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //obtengo indice del primer elemento

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li className="btn-op" onClick={handleNextbtn}>
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li className="btn-op" onClick={handlePrevbtn}>
        &hellip;
      </li>
    );
  }

  let currentCountries = countries
    .slice(indexOfFirstItem, indexOfLastItem)
    .map((country) => <CountriesItem key={country.id} {...country} />);

  let handleReset = () => {
    dispatch(loadCountries());
  };

  return (
    <>
      <CardContainer data-testid="pag">
        <Cards>{currentCountries}</Cards>
        {currentCountries && currentCountries.length === 1 ? (
          <div className="btn-container">
            <button className="btn" onClick={handleReset}>
              Volver
            </button>
          </div>
        ) : (
          <> </>
        )}
      </CardContainer>

      {currentCountries && currentCountries.length === 1 ? null : (
        <PaginationContainer>
          <PaginationButton
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            <NavigateBefore width="15px" />
          </PaginationButton>

          <PaginationList>
            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}
          </PaginationList>

          <PaginationButton
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            <NavigateNext width="15px" />
          </PaginationButton>
        </PaginationContainer>
      )}
    </>
  );
};

const CardContainer = styled.div`
  display: grid;
  max-width: 100vw;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.background};
  min-height: 84vh;
  & .btn-container {
    margin-top: 18px;
    margin-bottom: 20px;
    display: grid;
    place-items: center;
  }
  & .btn-container button {
    text-decoration: none;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    height: 30px;
    margin-top: 6px;
    border-radius: 50px;
    padding: 7px 15px 12px 15px;
    margin: 10px 8px;

    border-radius: 50px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.primaryHover};
      border: 1px solid ${({ theme }) => theme.primaryBorder};
    }
  }
`;

const Cards = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 260px));
  grid-auto-rows: minmax(200px, auto);

  justify-content: center;
  gap: 30px;
  margin: 40px auto 0 auto;

  & a {
    text-decoration: none;
    color: #000;
  }
`;

const PaginationContainer = styled.div`
  padding-top: 15px;
  display: flex;
  max-width: 100vw;

  background-color: ${({ theme }) => theme.background};
  justify-content: center;
`;

const PaginationList = styled.ul`
  padding: 0;
  display: flex;
  cursor: pointer;
  justify-content: space-around;

  & li {
    list-style: none;
    text-decoration: none;
    padding: 10px;
    margin: 0 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    &:hover {
      background-color: ${({ theme }) => theme.currentHover};
    }
  }

  .active {
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.primaryBorder};
  }

  @media only screen and (max-width: 500px) {
    .btn-op {
      display: none;
      background-color: yellow;
    }
  }
`;

const PaginationButton = styled.button`
  text-decoration: none;
  align-self: center;
  padding: 7px;
  border-radius: 5px;
  border: none;
  margin: 0 5px;
  cursor: pointer;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
  &:hover {
    background-color: ${({ theme }) => theme.currentHover};
    color: white;
  }

  &:disabled {
    color: rgb(198, 197, 202);
    background-color: grey;

    border: 1px solid rgb(198, 197, 202);
  }
  &:disabled:hover {
  }
`;

export default PaginatedCountries;
