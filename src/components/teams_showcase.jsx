import React from 'react'

import SectionHeader from './section_header'
import Team from './team'

const TeamShowcase = () => {
  return (
    <div className="bg-red-800">
        <SectionHeader name="TEAMS"/>
        <div className="grid grid-cols-3 p-16 gap-16">
            <Team />
            <Team />
            <Team />
            <Team />
        </div>
    </div>
  )
}

export default TeamShowcase