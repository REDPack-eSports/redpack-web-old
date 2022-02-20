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
            <BsYoutube />
            <BsTwitter />
            <BsInstagram />
            <BsFacebook />
            <BsTwitch />
        </div>

    </div>
  )
}

export default SocialMediaBar