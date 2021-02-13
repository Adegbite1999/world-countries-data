import React from 'react'
import '../Styles/style.css'
import '../Styles/Responsive.css'
const Country = ({country:{flag, name, capital,population, languages, region,timezones, currencies, callingCodes}}) =>{
    return (
        <div className="country">
            <div className="flag">
                <img src={flag} alt="countries-flag"/>
            </div>
            <h3 className="country-name">{name.toUpperCase()}</h3>
            <div className="desc">
              <p>
                  <span>Capital: </span>
                  {capital}
              </p>
              <p>
                 <span>Region: </span>
                 {region} 
              </p>
              <p>
                  <span>Population: </span>
                  {population}
              </p>
              <p>
                  <span>Languages: </span>
                  {languages.map((lang)=> <small>{lang.name}, </small>)}
              </p>
              <p>
                  <span>Currencies: </span>
                  {currencies.map((curr)=> <small>{curr.code}</small>)}
              </p>
              <p>
                  <span>Currency symbol: </span>
                  {currencies.map((sym)=> <small>{sym.symbol}</small>)}
              </p>
              <p>
                  <span>Timezone: </span>
                  {timezones[0]}
              </p>
              <p>
                  <span>Calling Code: + </span>
                  {callingCodes[0]}
              </p>
            </div>
        </div>
    )
}



function Main({data}) {
    return (
        <div className="container">
    {data.map((country) => (
      <Country key={country.numericCode} country={country}/>
    ))}
        </div>
    )
}

export default Main
