import React from "react";

import SponsorTag from "./sponsor_tag";
import image from "../images/hero_redpack.png"

const Hero = () => {
  const description = "THE FASTEST GROWING ROMAINAN ESPORTS ORGANIZATION"
  const sponsor_tag = "YOUR BRAND HERE"
  const sponsor_link = "http://yourbrandhere.link/"
  const link = "> FIND OUT WHY <"
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-6">
        <img src={image} alt="Redpack" className="w-full self-center"/>
        <SponsorTag link={sponsor_link}
                    tag={sponsor_tag}
        />
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
