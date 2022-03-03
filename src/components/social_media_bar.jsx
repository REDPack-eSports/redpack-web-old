import React from 'react'

import { BsFacebook, BsYoutube, BsTwitter, BsTwitch, BsInstagram} from "react-icons/bs"

const SocialMediaBar = () => {
  const callToAction = "CHECK US OUT ON SOCIAL MEDIA"
  return (
    <div className="flex flex-col gap-6 bg-rose-800 p-6
                    md:flex-row
                    lg:grid lg:grid-cols-2">
        <h2 className="text-3xl text-center font-semibold my-auto
                       xs:text-5xl
                       md:text-3xl
                       lg:text-5xl lg:text-right
                       xl:text-6xl">
          {callToAction}
        </h2>
        <div className="flex gap-6 justify-center text-4xl text-cyan-400 my-auto
                        xs:text-6xl xl:text-7xl">
            <a href="https://www.youtube.com/c/REDPackEsports" target="_blank" rel="noreferrer">
              <BsYoutube className="hover:text-white"/>
            </a> 
            <a href="https://twitter.com/RedPackEsports" target="_blank" rel="noreferrer">
              <BsTwitter className="hover:text-white"/>
            </a>
            <a href="https://www.instagram.com/_redpack_" target="_blank" rel="noreferrer">
              <BsInstagram className="hover:text-white"/>
            </a>
            <a href="https://www.facebook.com/redpackesports" target="_blank" rel="noreferrer">
              <BsFacebook className="hover:text-white"/>
            </a>
            <a href="https://www.twitch.tv/redpackorg" target="_blank" rel="noreferrer">
              <BsTwitch className="hover:text-white"/>
            </a>
        </div>

    </div>
  )
}

export default SocialMediaBar