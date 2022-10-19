import React from 'react'
import "./Country.css"


function Country({image,name,population,region,capital}) {
  return (
    <div className='datacard'>
        <img  src={image} alt="" className="flag" />
        <div className="nation">
          <h1 className="name"> {name} </h1>
        </div>
        <div className="details">
            <h1 className="population">
              Population : {population}
            </h1>
            <h1 className="region">
              Region : {region}
            </h1>
            <h1 className="capital">
              Capital : {capital}
            </h1>
          </div>

    </div>
  )
}

export default Country