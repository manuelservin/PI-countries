import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getCountry } from "../redux/reducers/CountrySlice/CountrySlice";
import Modal from "../components/Countries/country/Modal/Modal";

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);
  const { country } = countriesState;

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState("");

  const openModal = (e) => {
    setData(e.target.value);
    /*   let filter = country.Activities.filter((el) => el.name === e.target.value);
    console.log(filter); */
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    dispatch(getCountry(id));
  }, []);

  return (
    <>
      <CardContainer>
        <Card>
          <CardHead>
            <Img src={country.flag} alt="flag" />
            <div className="info">
              <h2> {country.name}</h2>
              <span> {country.id}</span>
            </div>
          </CardHead>
          <CardBody>
            <span>
              <b>Region: </b> {country.region}
            </span>
            <span>
              <b>Subregion: </b> {country.subregion}
            </span>
            <span>
              <b>Capital: </b> {country.capital}
            </span>
            <span>
              <b>Area: </b> {country.area} km2
            </span>
            <div className="line"></div>
            <div className="detail">
              <span className="title">
                <b>Activities: </b>
              </span>
              <div className="activities">
                {country.Activities && country.Activities.length > 0 ? (
                  country.Activities.map((el) => (
                    <button
                      onClick={openModal}
                      className="activity"
                      value={el.name}
                    >
                      {el.name}
                    </button>
                  ))
                ) : (
                  <div className="add">
                    <p> No tiene actividades asociadas</p>
                    <Link to={"/home/activities/create"}>
                      <button> Agregar Actividad</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
        {country.Activities && country.Activities.length > 0 ? (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            data={country.Activities.filter((el) => el.name === data)[0]}
          />
        ) : null}

        <Link to="/home/countries">
          <button className="btn">Volver</button>
        </Link>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  display: grid;
  place-items: center;
  min-height: 84vh;

  & a .btn {
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
    }
  }
`;

const Card = styled.div`
  margin-top: 80px;
  min-height: 600px;
  min-width: 300px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.backgroundContainer};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  transition: 0.2s;

  @media only screen and (max-width: 712px) {
  }
`;

const CardHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .info {
    width: 100%;
    color: ${({ theme }) => theme.text};
    font-weight: bold;
  }
  h2 {
    font-size: 30px;
    margin: 15px;
  }
  span {
    font-size: 20px;
  }
  @media only screen and (max-width: 712px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  margin-left: 60px;
  margin-top: 60px;
  width: 40%;
  max-width: 400px;
  height: 200px;
  object-fit: contain;
  @media only screen and (max-width: 712px) {
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }
  @media only screen and (max-width: 427px) {
    width: 100%;
    margin: 0;
    height: 220px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }
`;

const CardBody = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 150px;

  span {
    margin-top: 10px;
    width: 50%;
    padding-bottom: 30px;
    color: ${({ theme }) => theme.text};
  }
  span b {
    font-size: 20px;
  }

  .detail {
    & .title {
      text-align: center;
    }
    padding-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .activities {
    width: 100%;
    height: 100px;

    display: flex;
    /* padding-left: 60px; */

    justify-content: flex-start;

    & p {
      color: ${({ theme }) => theme.text};
    }
    & .add {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    & button {
      height: 20px;
      margin-right: 10px;
      padding: 7px 15px 7px 15px;
      padding-bottom: 20px;
      cursor: pointer;
      text-transform: capitalize;
      color: ${({ theme }) => theme.text};
      border-radius: 50px;
      background-color: ${({ theme }) => theme.backgroundContainer};
      border: 1px solid ${({ theme }) => theme.primaryBorder};
    }
    & .activity {
      margin-left: 15px;
      margin-top: 15px;
    }
    @media only screen and (max-width: 712px) {
    }
  }
  @media (max-width: 430px) {
    flex-wrap: nowrap;
    flex-direction: column;
    margin: 0;
    height: 250px;
    align-items: flex-start;
    span {
      width: 100%;
      text-align: start;
      padding: 0;
      padding-left: 15px;
    }
    span b {
      font-size: 18px;
    }
  }
`;

export default Details;
