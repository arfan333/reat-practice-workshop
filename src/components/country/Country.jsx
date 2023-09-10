import './country.css'
const Country = ({country}) => {
    console.log(country);
   const {name, flags, population, area} = country
    return (
        <div className='styleCountry'>
            <h3>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>population :{population}</p>
            <p>area: {area}</p>
        </div>
    );
};

export default Country;