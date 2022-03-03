import React from 'react'

// import SponsorTag from './sponsor_tag'

import image from "../images/hero_tournament.png"

const Rpl = () => {
  // const sponsor_tag = "YOUR BRAND HERE"
  // const sponsor_link = "http://yourbrandhere.link/"
  const description = "A NEW LEAGUE FOR ROMANIAN CS:GO ACADEMIES"
  const link = "> COMING SOON <"
  return (
    <div className="grid grid-rows-2 gap-3
                    md:grid-cols-2 md:grid-rows-1">
      <div className="flex flex-col gap-6">
        <img src={image} alt="Romainan Provisional League" className="w-3/4 self-center"/>
        {/* <SponsorTag link={sponsor_link}
                    tag={sponsor_tag}
        /> */}
      </div>
      <div className="flex flex-col gap-6 my-auto">
        <h2 className="text-center text-3xl font-black text-rose-800
                       xs:text-5xl
                       md:text-4xl
                       lg:text-5xl
                       xl:text-6xl
                       2xl:text-7xl">
          {description}
        </h2>
        <h2 className="text-center text-2xl font-bold
                       xs:text-4xl
                       md:text-3xl
                       lg:text-4xl
                       xl:text-5xl
                       2xl:text-6xl"> 
          {/*hover:underline hover:text-cyan-400*/}
          {link}
        </h2>
      </div>
    </div>
  );
}

export default Rpl