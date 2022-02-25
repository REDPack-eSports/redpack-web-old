import React from 'react'

import SponsorTag from './sponsor_tag'

const Team = (props) => {
  return (
    <div className="bg-black rounded-xl p-6
                    grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 text-center my-auto">
          <h1 className="text-2xl font-black">
            {props.name}
          </h1>
          <SponsorTag link={props.sponsor.link}
                      tag={props.sponsor.tag}
          />
          <h2 className="text-xl">
            {props.game}
          </h2>
        </div>
        <div className="flex flex-col gap-1 text-center font-black text-lg my-auto">
          {props.players.map((player) => (
            <p>{player}</p>
          ))}
        </div>
    </div>
  )
}

export default Team