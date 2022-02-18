import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import video from "../assets/bg.mp4";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const SectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  & h2 {
    text-transform: uppercase;
    font-size: 3em;
    letter-spacing: 10px;
  }
  & p {
    line-height: 1.4;
    margin: 15px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 16px;
  }
  & a {
    margin-top: 20px;
    text-decoration: none;
    padding: 8px 15px;
    text-transform: uppercase;
    display: inline-block;

    background: #393939;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #5e5e5e;
    }
  }
`;

const BgVideo = styled.video`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  object-fit: cover;

  z-index: -1;
`;

const LandingPage = () => {
  return (
    <Container>
      <SectionContainer>
        <h2>Countries</h2>
        <p>Discover every country in the world!</p>
        <Link to="/home/countries">Enter</Link>
      </SectionContainer>
      <BgVideo src={video} autoPlay muted loop></BgVideo>
    </Container>
  );
};

export default LandingPage;
