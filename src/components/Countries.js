import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import CountryCard from "./CountryCard";
import FilterForm from "./FilterForm";
const Countries = ({ countries, getName }) => {
  const [filteredData, setFilteredData] = useState([]);
  const sendName = (name) => {
    getName(name);
  };

  const handleFilterData = (e) => {
    const filterData = countries.filter((obj) => {
      if (obj.region === e.target.value) {
        return obj;
      }
    });
    setFilteredData(filterData);
  };

  return (
    <Container>
      <FilterForm handleFilterData={handleFilterData} />
      <Row>
        {filteredData.length > 0
          ? filteredData.map((country) => (
              <Col lg={3}>
                <CountryCard country={country} sendName={sendName} />
              </Col>
            ))
          : countries.map((country) => (
              <Col lg={3}>
                <CountryCard country={country} sendName={sendName} />
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default Countries;
