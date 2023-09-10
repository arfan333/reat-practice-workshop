import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";
import './country/style.css'


const Countries = () => {
    const [countriesName, setCountriesNmae] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountriesNmae(data))
    }, [])

    const [visitedCountryName, setVisitedCountryName] = useState([])

    const visitedCountryBtnHandler = country => {
       const newVisitedCountry = [...visitedCountryName, country]
       setVisitedCountryName(newVisitedCountry)
    }

    return (
        <div>
            <h3>Countries information: {countriesName.length}</h3>
            <div>
               <h4> visited countries :{visitedCountryName.length}</h4>
               <ul>
              {
                visitedCountryName.map(country => <li
                key={country.cca3}>
                        {country.name.common}
                </li>)
              }
               </ul>
            </div>
        
        <div className="style-container">
            {
                countriesName.map(country =><Country
               key={country.cca3} 
               country={country}
               visitedCountryBtnHandler = {visitedCountryBtnHandler}
               ></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;