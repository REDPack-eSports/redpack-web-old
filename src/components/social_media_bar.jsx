import React from 'react'

import { BsFacebook, BsYoutube, BsTwitter, BsTwitch, BsInstagram} from "react-icons/bs"

const SocialMediaBar = () => {
  return (
    <div className="grid grid-flow-col bg-red-800">
        <div className="p-6 text-right font-black text-5xl">
            <h2>CHECK US OUT</h2>
            <h2 className="text-white">ON SOCIAL MEDIA</h2>
        </div>
        <div className="flex my-auto text-7xl text-cyan-400 ml-24 gap-16"> 
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