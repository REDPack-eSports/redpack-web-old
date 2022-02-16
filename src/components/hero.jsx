import React from "react";

import image from "../images/hero_redpack.png"

const Hero = () => {
  return (
    <div className="bg-gray-900 grid grid-cols-2 p-4">
      <img src={image} alt="Redpack" className="p-4"/>
      <div className="grid">
        <h2 className="text-red-800 text-left mt-auto mr-5 text-7xl font-bold">THE FASTEST GROWING ROMAINAN ESPORTS ORGANIZATION</h2>
        <h2 className="text-gray-100 text-left my-auto mr-5 text-5xl font-bold">THE STORY SO FAR {'<<<'}</h2>
      </div>
      
    </div>
  );
};

export default Hero;
