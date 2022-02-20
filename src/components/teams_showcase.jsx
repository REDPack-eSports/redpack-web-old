import React from 'react'

import SectionHeader from './section_header'
import Team from './team'

const TeamShowcase = () => {
  const teams = [
    {
      name: "REDPack Quantum",
      game: "CS:GO",
      sponsor: "YOUR BRAND HERE",
      players: ["AlexJ", "dyla", "7kick", "savage", "dan7"],
    },
    {
      name: "REDPack Hunters",
      game: "CS:GO",
      sponsor: "YOUR BRAND HERE",
      players: ["awks", "warbringer", "exeqter", "tony77777", "erretzen"],
    },
    {
      name: "REDPack UDP",
      game: "CS:GO",
      sponsor: "YOUR BRAND HERE",
      players: ["never-sleep", "velede", "Aless", "m0nkey", "mhA"],
    },
    {
      name: "REDPack",
      game: "Valorant",
      sponsor: "YOUR BRAND HERE",
      players: ["17nik", "UNCAGED", "jurca", "nyw", "Javelin"],
    },
    {
      name: "REDPack",
      game: "Rocket League",
      sponsor: "YOUR BRAND HERE",
      players: ["Slayer", "Deem", "Mario", "Miki"],
    },
    {
      name: "REDPack",
      game: "Fortnite",
      sponsor: "YOUR BRAND HERE",
      players: ["Lynk", "28HeLL", "Mohito", "Glxck", "Ansilexx"],
    },
  ]

  return (
    <div className="p-6 bg-red-700">
        <SectionHeader name="TEAMS"/>
        <div className="grid grid-cols-1 gap-6">
          {teams.map((team) => (
            <Team name={team.name}
                  game={team.game}
                  sponsor={team.sponsor}
                  players={team.players} 
            />
          ))}
        </div>
    </div>
  )
}

export default TeamShowcase