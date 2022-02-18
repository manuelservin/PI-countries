import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  filterByActivity,
  filterByContinent,
  filterBySubRegion,
  loadCountries,
  orderAsc,
  orderAZ,
  orderDesc,
  orderZA,
} from "../../../../redux/reducers/CountrySlice/CountrySlice";

import styled from "styled-components";

const OptionsContainer = styled.div`
  display: flex;
  & .select {
    height: 30px;
    margin-top: 6px;
    border-radius: 50px;
    padding-left: 5px;
    cursor: pointer;
    margin: 10px 8px;
    background-color: ${({ theme }) => theme.backgroundInputs};
    border-color: ${({ theme }) => theme.backgroundInputs};
    color: ${({ theme }) => theme.text};
  }
  &:focus {
    /*   border-color: ${({ theme }) => theme.background2}; */
  }
  & .select_1 {
    padding: 0 10px;
  }

  & h2 {
    font-size: 15px;
    padding: 0 12px;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    &h2 {
      display: none;
    }
  }
`;

const Filters = () => {
  let countries = useSelector((state) => state.countries.countries);
  const region = useSelector((state) => state.countries.region);

  if (region && region.length > 0) {
    countries = region;
  }

  const dispatch = useDispatch();

  let activities = useSelector((state) => state.countries.activities);
  const countriesActivity = useSelector(
    (state) => state.countries.countriesActivity
  );


  /* const activityFilter= countries.filter((c)=>{ return c.Activities.some((a)=> a.name === ) 
   }) */

  function orderAlpha(e) {
    if (e.target.value === "AZ") {
      dispatch(orderAZ());
    } else if (e.target.value === "ZA") {
      dispatch(orderZA());
    }
  }

  function orderNum(e) {
    if (e.target.value === "Asc") {
      dispatch(orderAsc());
    } else if (e.target.value === "Desc") {
      dispatch(orderDesc());
    }
  }

  let filterContinent = (e) => {
    if (e.target.value === "All") dispatch(loadCountries());
    dispatch(filterByContinent(e.target.value));
  };


  let filterActivity = (e) => {
    dispatch(filterByActivity(e.target.value));
    /* console.log(e.target.value); */
  };

  return (
    <OptionsContainer>
      <h2>ORDER</h2>
      <select
        defaultValue={"By Name"}
        className="select select_1"
        onChange={(e) => orderAlpha(e)}
      >
        <option value="By Name" disabled hidden>
          By Name
        </option>
        <option value="AZ">AZ</option>
        <option value="ZA">ZA</option>
      </select>

      <select
        defaultValue="By Area"
        className="select"
        onChange={(e) => orderNum(e)}
      >
        <option value="By Area" disabled hidden>
          By Area
        </option>

        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
      </select>

      {/*  filter container */}

      <h2>FILTER </h2>

      <select
        defaultValue={"All"}
        className="select"
        onChange={filterContinent}
      >
        <option value="All">By Region</option>
        <option value="All">All</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antartic</option>
      </select>

    

     {activities.length > 0 ? (<select defaultValue={"All"} className="select" onChange={filterActivity}>
        <option value="All">By Activity</option>
        {activities &&
          activities.map((act) => (
            <option key={act.id} value={act.name}>
              {" "}
              {act.name}{" "}
            </option>
          ))}
      </select>) : null } 
    </OptionsContainer>
  );
};

export default Filters;
