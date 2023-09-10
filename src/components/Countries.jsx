import { useEffect } from "react";
import { useState } from "react";
import Country from "./country/Country";


const Countries = () => {
    const [countriesName, setCountriesNmae] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountriesNmae(data))
    }, [])

    return (
        <div>
            <h3>Countries information: {countriesName.length}</h3>
            {
                countriesName.map(country =><Country
               key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;