import { useState } from 'react';
import './country.css'
const Country = ({country, visitedCountryBtnHandler}) => {
   
   const {name, flags, population, area, cca3} = country

   const [visited, setVisited] =useState(false)

   const buttonHandle = () => {
    setVisited(!visited)
   }

    return (
        <div className='styleCountry'>
            <h3>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>population :{population}</p>
            <p>area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={() => visitedCountryBtnHandler(country)}>Mark Visit</button> <br />
            <button onClick={buttonHandle}>{visited ? "visited" : "Going"}</button>
            {visited ? "visited this country" : "not visit yet"}
        </div>
    );
};

export default Country;