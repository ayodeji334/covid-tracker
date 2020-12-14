import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  const [countryInfo, setCountryInfo] = useState({});
  const [countryStatesInfo, setCountryStatesInfo] = useState([]);

  useEffect(() => {
    //Get the data for Nigeria
    fetch("https://disease.sh/v3/covid-19/countries/Nigeria?strict=true")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  //Get the States Info Data
  useEffect(() => {
    //Get the data for Nigeria
    fetch("https://disease.sh/v3/covid-19/gov/nigeria")
      .then((response) => response.json())
      .then((data) => {
        setCountryStatesInfo(data);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="main-container">
          <nav className="container-fluid">
            <h4 className="font-weight-bold">
              <img
                src="https://disease.sh/assets/img/flags/ng.png"
                alt="Nigeria-flag"
                width="35"
                height="25"
                className="mr-2"
              />
              <strong>Nigeria COVID-19 Tracker</strong>
            </h4>
          </nav>
          <Dashboard
            countryInfo={countryInfo}
            statesInfo={countryStatesInfo}
          />
        <Footer />
      </div>
    </div>
  );
}

export default App;
