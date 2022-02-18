import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Burger from "./Burguer/Burguer";

let Sun, Moon;

const NavBarContainer = styled.nav`
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundContainer};
  position: fixed;
  z-index: 20;
  display: flex;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  & .logo {
    width: 70px;
    padding-left: 15px;
    padding-top: 15px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      h1 {
        margin: 0;
        text-align: center;
        padding-bottom: 5px;
      }
    }
  }
  & .toggler {
    background-color: ${({ theme }) => theme.backgroundContainer};

    button {
      border: none;
      background-color: transparent;
      margin-top: 10px;
      margin-left: 15px;
    }
  }
`;

Sun = Moon = styled.svg`
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.6s linear;
`;

const NavBar = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <NavBarContainer>
      <div className="logo">
        <Link to ="/">
          <h1>App.</h1>
        </Link>
      </div>
      <div className="toggler">
        <button onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2686a0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-moon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </Moon>
          ) : (
            <Sun
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#936c20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-sun"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </Sun>
          )}
        </button>
      </div>

      <SearchBar />
      <Burger className="nav-burger" />
    </NavBarContainer>
  );
};

export default NavBar;
