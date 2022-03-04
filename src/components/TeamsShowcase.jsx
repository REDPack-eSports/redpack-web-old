import React from 'react'

import SectionHeader from './SectionHeader'
import Team from './Team'

import teams from '../data/teams'

const TeamShowcase = () => {

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

export default TeamShowcase