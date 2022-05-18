import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./components/Countries";
import CountryInfo from "./components/CountryInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);

  const [nameCountry, setNameCountry] = useState(
    JSON.parse(localStorage.getItem("name"))
  );

  const getName = (name) => {
    setNameCountry(name);
  };
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountries(data);
    };

    getData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Countries
              countries={countries}
              setCountries={setCountries}
              getName={getName}
            />
          }
        />
        <Route
          exact
          path="/info"
          element={
            <CountryInfo nameCountry={nameCountry} countries={countries} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
