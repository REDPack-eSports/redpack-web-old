import React from 'react'

import SponsorTag from './sponsor_tag'

import image from "../images/hero_tournament.png"

const Tournament = () => {
  const sponsor_tag = "YOUR BRAND HERE"
  const sponsor_link = "http://yourbrandhere.link/"
  const description = "SIGN UP OPEN FOR REDPACK PROVISIONAL TOURNAMENT"
  const link1 = "> QUALIFIER 1 - 25/02/2022 <"
  const link2 = "> QUALIFIER 2 - 26/02/2022 <"
  const link3 = "> QUALIFIER 3 - 27/02/2022 <"
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-6">
        <img src={image} alt="RPL Logo" className="w-full self-center"/>
        <SponsorTag link={sponsor_link}
                    tag={sponsor_tag}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-3xl font-bold text-red-700">
          {description}
        </h2>
        <a href="https://www.faceit.com/en/championship/f64da64e-486f-4be0-8641-f76f748d95ed/">
          <h2 className="text-center text-2xl font-semibold
                        hover:underline hover:text-cyan-400"> 
            {link1}
          </h2>
        </a>
        <a href="https://www.faceit.com/en/championship/4a2a6b85-c823-482e-93e3-228dbdb438ec/">
          <h2 className="text-center text-2xl font-semibold
                         hover:underline hover:text-cyan-400"> 
            {link2}
          </h2>
        </a>
        <a href="https://www.faceit.com/en/championship/ca27d292-7950-4b5a-b3bd-9519f0fec156/">
          <h2 className="text-center text-2xl font-semibold
                         hover:underline hover:text-cyan-400"> 
            {link3}
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Tournament