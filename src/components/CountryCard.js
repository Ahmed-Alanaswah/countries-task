import React from "react";

import { useNavigate } from "react-router-dom";
import classes from "./CountryCard.module.css";
const CountryCard = ({ country, sendName }) => {
  const navigate = useNavigate();

  const handleChangePage = (name) => {
    sendName(name);

    navigate(`/info`);

    localStorage.setItem("name", JSON.stringify(name));
  };

  return (
    <div
      className={classes.parentCard}
      onClick={() => handleChangePage(country.name)}
      to={`/info`}
    >
      <div className={classes.card}>
        <img className={classes.img} variant="top" src={country.flag} />
        <div className={classes.body}>
          <h3>{country.name}</h3>
          <p> Population: {country.population}</p>
          <p> Region: {country.region}</p>
          <p> Capital: {country.capital}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
