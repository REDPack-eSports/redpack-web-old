import React from 'react'

const Team = () => {
  const sponsor = "YOUR BRAND HERE"
  const name = "TEAM NAME"
  const game = "CS:GO"
  const players = ["Player1", "Player2", "Player3", "Player4", "Player5"]
  return (
    <div className="bg-black rounded-xl p-6
                    grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 text-center my-auto">
          <h1 className="text-3xl font-black">
            {name}
          </h1>
          <p className="text-center text-base font-semibold 
                       border-2 rounded-lg">
            {sponsor}
          </p>
          <h2 className="text-xl">
            {game}
          </h2>
        </div>
        <div className="text-center font-black text-lg my-auto">
          {players.map((player) => (
            <p>{player}</p>
          ))}
        </div>
    </div>
  )
}

export default Team