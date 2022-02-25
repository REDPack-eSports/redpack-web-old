import React from 'react'

import SponsorTag from './sponsor_tag'

import image from "../images/hero_tournament.png"

const Rpl = () => {
  const sponsor_tag = "YOUR BRAND HERE"
  const sponsor_link = "http://yourbrandhere.link/"
  const description = "A NEW LEAGUE FOR ROMANIAN CS:GO ACADEMIES"
  const link = "> FIND OUT MORE <"
  return (
    <div className="grid grid-rows-2 gap-3">
      <div className="flex flex-col gap-6">
        <img src={image} alt="Romainan Provisional League" className="w-full self-center"/>
        <SponsorTag link={sponsor_link}
                    tag={sponsor_tag}
        />
      </div>
      <div className="flex flex-col gap-6 my-auto">
        <h2 className="text-center text-3xl font-black text-red-700
                       xs:text-5xl">
          {description}
        </h2>
        <h2 className="text-center text-2xl font-bold
                       hover:underline hover:text-cyan-400
                       xs:text-4xl"> 
          {link}
        </h2>
      </div>
    </div>
  );
}

export default Rpl