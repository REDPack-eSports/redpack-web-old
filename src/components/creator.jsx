import React from 'react'

import { BsYoutube, BsTwitch } from 'react-icons/bs';
const Creator = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="bg-rose-800 rounded-xl p-6
                      grid grid-cols-2 gap-4 h-full group">
        <div className="my-auto">
          <h1 className="text-lg font-black text-left
                         xs:text-2xl
                         sm:text-lg
                         md:text-2xl
                         xl:text-xl
                         2xl:text-2xl">
            {props.name}
          </h1>
          <p className="text-base text-black font-bold text-left
                        xs:text-xl
                        sm:text-base
                        md:text-xl
                        xl:text-lg
                        2xl:text-xl">
            {props.game}
          </p>
        </div>
        <div className="my-auto flex gap-3">
          {props.platform === "YouTube" ? 
            <BsYoutube className="text-5xl md:text-6xl 2xl:text-7xl group-hover:text-cyan-400" /> :
            <BsTwitch className="text-5xl md:text-6xl 2xl:text-7xl group-hover:text-cyan-400" />
          }
          <p className="my-auto text-xl font-black md:text-2xl 2xl:text-4xl">{props.audience}</p>
        </div>
      </div>
    </a>
  );
}

export default Creator