import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// import SponsorTag from "./sponsor_tag";

const Hero = () => {
  const description = "THE FASTEST GROWING ROMAINAN ESPORTS ORGANIZATION"
  // const sponsor_tag = "YOUR BRAND HERE"
  // const sponsor_link = "http://yourbrandhere.link/"
  const link = "> THE STORY SO FAR <"
  return (
    <div id="hero" className="grid grid-rows-2 gap-3 p-6 mt-6
                    md:grid-cols-2 md:grid-rows-1">
      <div className="flex flex-col gap-6">
        <StaticImage src="../images/hero.png" placeholder="blurred" alt="Redpack" className="w-full self-center"/>
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
        <Link to="/story">
          <h2 className="text-center text-2xl font-bold
                        hover:underline hover:text-cyan-400
                        xs:text-4xl
                        md:text-3xl
                        lg:text-4xl
                        xl:text-5xl
                        2xl:text-6xl"> 
            {link}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
