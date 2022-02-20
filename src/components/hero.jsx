import React from "react";

import image from "../images/hero_redpack.png"

const Hero = () => {
  const description = "THE FASTEST GROWING ROMAINAN ESPORTS ORGANIZATION"
  const org_sponsors = "YOUR BRAND HERE"
  const link = ">>> FIND OUT WHY <<<"
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-6">
        <img src={image} alt="Redpack" className="w-full self-center"/>
        <h2 className="text-center text-xl font-semibold 
                       border-2 rounded-lg w-3/4 self-center">
          {org_sponsors}
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
};

export default Hero;
