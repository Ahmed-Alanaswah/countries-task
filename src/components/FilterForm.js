import React from "react";
import { Form } from "react-bootstrap";
const FilterForm = ({ handleFilterData }) => {
  return (
    <>
      <Form.Select
        name="cars"
        id="cars"
        placeholder="Filter By Region"
        onChange={(e) => handleFilterData(e)}
        style={{ marginBottom: "50px" }}
      >
        <option value="Filter By Region">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Form.Select>
    </>
  );
};

export default FilterForm;
