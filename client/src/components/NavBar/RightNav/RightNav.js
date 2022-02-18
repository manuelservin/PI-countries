import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Filters from "../../Countries/Countries/Options/Filters";

const NavItems = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 20;
  & button {
    text-decoration: none;

    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    height: 30px;
    margin-top: 6px;
    border-radius: 50px;
    padding: 7px 15px 7px 15px;
    margin: 10px 8px;

    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.primaryHover};
      border: 1px solid ${({ theme }) => theme.primaryBorder};
    }
  }

  @media (max-width: 1176px) {
    flex-flow: column nowrap;

    background-color: ${({ theme }) => theme.backgroundContainer};

    box-shadow: 0 1px 6px 3px rgba(32, 33, 36, 0.28);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    padding-top: 150px;
    transition: transform 0.3s ease-in-out;

    & a {
      margin-top: 25px;
      display: flex;
      justify-content: center;
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <NavItems open={open}>
      <Filters />
      <NavLink to="/home/activities/create">
        <button>NEW ACTIVITY </button>
      </NavLink>
    </NavItems>
  );
};

export default RightNav;
