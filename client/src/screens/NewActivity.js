import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { Cross } from "@styled-icons/entypo/Cross";

import { Link } from "react-router-dom";
import {
  createActivity,
  loadCountries,
} from "../redux/reducers/CountrySlice/CountrySlice";

function validate(form) {
  var valoresAceptados = /^[0-9]+$/; //validacion para numeros
  let errors = {};
  if (!form.name) {
    errors.name = "Se requiere un nombre";
  }

  if (!form.duration) {
    errors.duration = "Se requiere un tiempo de duracion";
  } else if (!form.duration.match(valoresAceptados)) {
    errors.duration2 = "Solo se puede ingresar numeros";
  }

  return errors;
}

const NewActivity = () => {
  const countriesState = useSelector((state) => state.countries);
  const { countries } = countriesState;
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validate(form));
  };

  function handleSelect(e) {
    setForm({
      ...form,
      countryId: [...form.countryId, e.target.value],
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(createActivity(form));
      setForm({
        //reinicion el formulario
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
      });
    }
  }

  function handleDelete(el) {
    setForm({
      ...form,
      countryId: form.countryId.filter((country) => country !== el),
    });
  }

  useEffect(() => {
    dispatch(loadCountries());
  }, [dispatch]);

  return (
    <PageContainer>
      <ActivityContainer>
        <FormTitle>Create Activity</FormTitle>
        <FormContainer onSubmit={handleSubmit}>
          <InputSection>
            <label className="label">Nombre:</label>
            <input
              type="text"
              value={form.name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.name && <p className="errors">{errors.name}</p>}
          </InputSection>
          <InputSection>
            <label htmlFor="">Duration:</label>
            <input
              type="text"
              value={form.duration}
              name="duration"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.duration && <p className="errors">{errors.duration}</p>} :{" "}
            {errors.duration2 && <p className="errors"> {errors.duration2}</p>}
          </InputSection>

          <InputSection>
            <label htmlFor="">Difficulty</label>
            <select
              name="difficulty"
              onChange={handleChange}
              defaultValue=""
              required
            >
              <option value="">----</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </InputSection>

          <InputSection>
            <label htmlFor="">Temporada:</label>
            <select
              name="season"
              onChange={handleChange}
              defaultValue=""
              required
            >
              <option value="">----</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </select>
          </InputSection>

          <InputSection>
            <select
              onChange={(e) => handleSelect(e)}
              onBlur={handleBlur}
              required
            >
              <option value="">Country</option>
              {countries.map((el) => (
                <option value={el.id}>{el.name}</option>
              ))}
            </select>
            <div className="container-options">
              {form.countryId.map((el) => (
                <button className="options" onClick={() => handleDelete(el)}>
                  {el} <Cross />{" "}
                </button>
              ))}
            </div>

            <button className="btn" type="submit">
              Agregar
            </button>
          </InputSection>
        </FormContainer>
      </ActivityContainer>
      <Link to="/home/countries">
        <button className="btn">Volver</button>
      </Link>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding-top: 10px;
  background-color: ${({ theme }) => theme.background};
  height: 86vh;
  & a {
    margin-top: 18px;
    display: grid;
    place-items: center;
    text-decoration: none;
  }
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
      border: 1px solid ${({ theme }) => theme.primaryBorder};
    }
  }
`;

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  align-items: center;
  border-radius: 5px;
  width: 400px;
  max-width: 500px;
  height: 600px;
  background-color: ${({ theme }) => theme.backgroundContainer};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`;

const FormTitle = styled.div`
  font-size: 30px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.text};
  margin: 15px 0;
`;
const FormContainer = styled.form`
  justify-content: flex-start;
  width: 14%auto;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  label {
    margin-bottom: 7px;
    color: ${({ theme }) => theme.text};
  }
  input {
    padding: 5px;
    background-color: ${({ theme }) => theme.backgroundInputs};
    border: none;
    color: ${({ theme }) => theme.text};

    :focus {
      outline: 2px solid ${({ theme }) => theme.backgroundInputs};
      border: none;
    }
  }

  .errors {
    color: #dc3545;
  }

  select {
    padding: 5px;
    background-color: ${({ theme }) => theme.backgroundInputs};
    border: none;
    color: ${({ theme }) => theme.text};

    :focus {
      outline: 2px solid ${({ theme }) => theme.backgroundInputs};
      border: none;
    }
  }

  .container-options {
    margin-top: 15px;
    display: flex;
    width: 100%;
  }
  .options {
    display: flex;
    width: 60px;
    cursor: pointer;

    svg {
      height: 18px;
      width: 18px;
    }

    &:hover {
      svg {
        color: red;
      }
    }
  }

  .btn {
    text-decoration: none;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    height: 30px;
    margin-top: 30px;
    border-radius: 50px;
    padding: 7px 15px 12px 15px;

    border-radius: 50px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.primaryHover};
      border: 1px solid ${({ theme }) => theme.primaryBorder};
    }
  }
`;

export default NewActivity;
