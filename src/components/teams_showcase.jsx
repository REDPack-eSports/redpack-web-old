import React from 'react'

import SectionHeader from './section_header'
import Team from './team'

const TeamShowcase = () => {
  const teams = [
    {
      name: "REDPack Quantum",
      game: "CS:GO",
      sponsor: {
        tag: "SPONSOR",
        link: "http://yourbrandhere.link/"
      },
      players: ["AlexJ", "dyla", "7kick", "savage", "dan7"],
    },
    {
      name: "REDPack Hunters",
      game: "CS:GO",
      sponsor: {
        tag: "SPONSOR",
        link: "http://yourbrandhere.link/"
      },
      players: ["awks", "warbringer", "exeqter", "tony77777", "erretzen"],
    },
    {
      name: "REDPack UDP",
      game: "CS:GO",
      sponsor: {
        tag: "SPONSOR",
        link: "http://yourbrandhere.link/"
      },
      players: ["never-sleep", "velede", "Aless", "m0nkey", "mhA"],
    },
    {
      name: "REDPack",
      game: "Valorant",
      sponsor: {
        tag: "SPONSOR",
        link: "http://yourbrandhere.link/"
      },
      players: ["17nik", "UNCAGED", "jurca", "nyw", "Javelin"],
    },
    {
      name: "REDPack",
      game: "Rocket League",
      sponsor: {
        tag: "SPONSOR",
        link: "http://yourbrandhere.link/"
      },
      players: ["Slayer", "Deem", "Mario", "Miki"],
    },
    {
      name: "REDPack",
      game: "Fortnite",
      sponsor: {
        tag: "SPONSOR",
        link: "http://yourbrandhere.link/"
      },
      players: ["Lynk", "28HeLL", "Mohito", "Glxck", "Ansilexx"],
    },
  ]

  return (
    <div className="p-6 bg-red-700">
        <SectionHeader name="TEAMS"/>
        <div className="grid grid-cols-1 gap-6
                        md:grid-cols-2">
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