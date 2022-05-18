import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country, sendName }) => {
  const navigate = useNavigate();
  let slug;
  const handleChangePage = (name) => {
    sendName(name);
    // slug = name.split(" ").join("-");
    navigate(`/info`);

    localStorage.setItem("name", JSON.stringify(name));
  };

  return (
    <div onClick={() => handleChangePage(country.name)} to={`/info`}>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img variant="top" src={country.flag} />
        <Card.Body>
          <Card.Title>{country.name}</Card.Title>
          <Card.Text> Population: {country.population}</Card.Text>
          <Card.Text> Region: {country.region}</Card.Text>
          <Card.Text> Capital: {country.capital}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountryCard;
