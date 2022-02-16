import React from 'react'

import image from "../images/hero_tournament.png"

const Tournament = () => {
    return (
     <div className="bg-gray-900 grid grid-cols-2 p-4">
        <div className="grid">
          <h2 className="text-red-800 text-right mt-auto mr-5 text-7xl font-bold">REDPACK PROVISIONAL LEAGUE</h2>
          <h2 className="text-gray-100 text-right my-auto mr-5 text-5xl font-bold"> {'>>>'} SIGN UP NOW</h2>
        </div>   
        <img src={image} alt="Redpack" className="p-4"/>
      </div>
    );
}

export default Tournament