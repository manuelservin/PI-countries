import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../../redux/reducers/CountrySlice/CountrySlice";
import { Search } from "@styled-icons/boxicons-regular/Search";
import styled from "styled-components";

const BtnSearch = styled(Search)`
  height: 15px;
`;

const StyledForm = styled.form`
  width: 45%;
  margin-left: 10px;
  display: flex;
  align-items: center;
  height: 55px;

  & input[type="text"] {
    width: 90%;
    height: 33px;
    padding: 0 10px;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.primaryBorder};
    background-color: ${({ theme }) => theme.background};

    border-radius: 50px 0 0 50px;
    z-index: 2;
  }

  & input:focus {
    outline: none;

    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  & button {
    width: 10%;
    height: 33px;
    border: 1px solid;

    top: 13px;
    right: 0;
    border-radius: 0px 50px 50px 0;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primaryBorder};

    z-index: 1;
  }
  @media (max-width: 768px) {
    width: 55%;

    input[type="text"] {
      width: 80%;
    }
    button {
      width: 20%;
    }
  }
  & svg {
    color: ${({ theme }) => theme.text};
  }
`;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  var dispatch = useDispatch();
  let handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchCountry(search));
  };

  return (
    <>
      <StyledForm onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          className="input"
          placeholder="Search..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button className="btn btn-primary" type="submit">
          {" "}
          <BtnSearch />
        </button>
      </StyledForm>
    </>
  );
};

export default SearchBar;
