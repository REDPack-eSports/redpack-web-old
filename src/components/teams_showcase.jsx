import React from 'react'

import SectionHeader from './section_header'
import Team from './team'

import teams from '../data/teams'

const TeamsShowcase = () => {
  return (
    <div className="p-6 bg-rose-800">
        <SectionHeader name="TEAMS" anchor="teams"/>
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

export default TeamsShowcase