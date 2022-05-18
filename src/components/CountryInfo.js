import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={country.flag} />
        <Card.Body>
          <Card.Title>Native name: {country.nativeName}</Card.Title>
          <Card.Text> Population: {country.population}</Card.Text>
          <Card.Text> Region: {country.region}</Card.Text>
          <Card.Text> Sub Region: {country.subregion}</Card.Text>
          <Card.Text> Top Level Domain: {country.topLevelDomain}</Card.Text>
          {country.currenciesK && (
            <Card.Text> Currencies: {country.currencies[0].name}</Card.Text>
          )}
          {country.languages &&
            country.languages.map((lang) => (
              <Card.Text> Languages: {lang.name}</Card.Text>
            ))}

          <Card.Text>
            {borders.length > 0 && "Border Countries:"}
            {borders.map((border) => (
              <li>{border}</li>
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CountryInfo;
