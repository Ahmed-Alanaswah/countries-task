import React, { useEffect, useState } from "react";

import axios from "axios";
import classes from "./CountryInfo.module.css";

const CountryInfo = ({ nameCountry, countries }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${nameCountry}?fullText=true`
      );

      setCountry(response.data[0]);
    };

    getInfo();
  }, []);

  let borders = [];

  let getBorders = () => {
    countries.map((item) => {
      if (item.borders) {
        item.borders.map((border) => {
          if (border === country.alpha3Code) {
            borders.push(item.name);
          }
        });
      }
    });
  };
  getBorders();

  return (
    <>
      <div className={classes.cardInfo}>
        <img className={classes.img} variant="top" src={country.flag} />
        <div className={classes.body}>
          <h3>Native name: {country.nativeName}</h3>
          <p> Population: {country.population}</p>
          <p> Region: {country.region}</p>
          <p> Sub Region: {country.subregion}</p>
          <p> Top Level Domain: {country.topLevelDomain}</p>
          {country.currenciesK && (
            <p> Currencies: {country.currencies[0].name}</p>
          )}

          <ul>
            {country.languages && <p>Languages:</p>}
            {country.languages &&
              country.languages.map((lang) => (
                <li key={lang.name}>{lang.name}</li>
              ))}
          </ul>
          {/* {country.languages &&
            country.languages.map((lang) => <p> Languages: {lang.name}</p>)} */}

          <ul>
            {borders.length > 0 && "Border Countries:"}
            {borders.map((border) => (
              <li key={border}>{border}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
