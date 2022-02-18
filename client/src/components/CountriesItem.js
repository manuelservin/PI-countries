import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CountriesItem = ({ id, name, region, flag }) => {
  return (
    <Link to={`countries/${id}`}>
      <Card>
        <Img src={flag} alt="country-flag" />

        <CardBody>
          <h2>{name} </h2>
          <div className="info">
            <span>{region}</span>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  display: grid;

  grid-template-rows: 210px 200px;
  grid-template-areas: "image" "text";
  border-radius: 18px;
  background-color: #f8f8f8;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  transition: 0.2s;
  &:hover {
    /* transform: scale(1.1); */
    transform: translateY(-8px);

    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
const Img = styled.img`
  grid-area: "image";
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;

  width: 100%;
  height: 100%;

  margin-bottom: 15px;
  object-fit: cover;
`;

const CardBody = styled.div`
  grid-area: "text";
  margin: 25px;

  & h2 {
    font-size: 28px;
  }
  & a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }
  .info {
    display: flex;
    flex-direction: column;
    & span {
      margin-bottom: 8px;
    }
  }
`;

export default CountriesItem;
