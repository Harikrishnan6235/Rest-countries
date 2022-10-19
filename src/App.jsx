import React, { useEffect, useState } from 'react'
import "./App.css"
import { FaChevronDown, FaMoon, FaSearch } from 'react-icons/fa';
import Country from './components/countries/Country';


const App = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v2/all").then((response)=>response.json()).then((data)=>setCountries(data))
  }, [])
  
  return (
    <div className='main'>
      <div className="header">
        <h1 className='where'>Where in the world?</h1>
        <div className="modes"><FaMoon/> 
        <font> Dark Mode </font>
        </div>
      </div>
      <div className="options">
        <div className="search">
          <FaSearch size={14} />
        <input className='searchbar' type="text" placeholder='Search for a country...' />
        </div>
        <div className="filter">
          <h1 className="filterregion">Filter by Region</h1>
          <FaChevronDown/>
        </div>
        </div>
      <div className="comp">
        {countries.map((details)=>{
          console.log(details.name)
          return(
            <Country
            image={details.flags.png}
            name={details.name}
            population={details.population}
            region={details.region}
            capital={details.capital}
            />
          

          )
        })}

      </div>
    </div>
  )
}

export default App