import React, { useState } from "react";

import classes from "./Countries.module.css";
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
    <div className={classes.container}>
      <FilterForm handleFilterData={handleFilterData} />
      <div className={classes.row}>
        {filteredData.length > 0
          ? filteredData.map((country) => (
              <CountryCard country={country} sendName={sendName} />
            ))
          : countries.map((country) => (
              <CountryCard country={country} sendName={sendName} />
            ))}
      </div>
    </div>
  );
};

export default Countries;
