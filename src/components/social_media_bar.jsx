import React from 'react'

import { BsFacebook, BsYoutube, BsTwitter, BsTwitch, BsInstagram} from "react-icons/bs"

const SocialMediaBar = () => {
  const callToAction = "CHECK US OUT ON SOCIAL MEDIA"
  return (
    <div className="flex flex-col gap-6 bg-red-700 p-6">
        <h2 className="text-3xl text-center font-semibold">
          {callToAction}
        </h2>
        <div className="flex gap-6 justify-center text-4xl text-cyan-400">
            <a href="https://www.youtube.com/c/REDPackEsports" target="_blank">
              <BsYoutube />
            </a> 
            <a href="https://twitter.com/RedPackEsports" target="_blank">
              <BsTwitter />
            </a>
            <a href="https://www.instagram.com/_redpack_" target="_blank">
              <BsInstagram />
            </a>
            <a href="https://www.facebook.com/redpackesports" target="_blank">
              <BsFacebook />
            </a>
            <a href="https://www.twitch.tv/redpackorg" target="_blank">
              <BsTwitch />
            </a>
        </div>

    </div>
  )
}

export default SocialMediaBar