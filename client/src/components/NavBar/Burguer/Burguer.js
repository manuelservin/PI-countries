import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "../RightNav/RightNav";

const StyledBurger = styled.div`
  width: 30%;
  height: 2rem;
  z-index: 21;
  display: none;

  @media (max-width: 1176px) {
    display: flex;
    margin-top: 10px;

    justify-content: space-around;
    flex-flow: column nowrap;
    align-items: flex-end;
    padding-right: 20px;
    cursor: pointer;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#9c9c9c" : "#9c9c9c")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
