import React from 'react'

import image from "../images/hero_tournament.png"

const Tournament = () => {
  const sponsor = "YOUR BRAND HERE"
  const description = "WE ARE HOSTING THE FIRST HIGH-PROFILE ACADEMY CS:GO TOURNAMENT"
  const link = ">>> SIGN UP HERE <<<"
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-6">
        <img src={image} alt="RPL Logo" className="w-full self-center"/>
        <h2 className="text-center text-xl font-semibold 
                       border-2 rounded-lg w-3/4 self-center">
          {sponsor}
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-3xl font-bold text-red-700">
          {description}
        </h2>
        <h2 className="text-center text-2xl font-semibold
                       hover:underline hover:text-cyan-400"> 
          {link}
        </h2>
      </div>
    </div>
  );
}

export default Tournament