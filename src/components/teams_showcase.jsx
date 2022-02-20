import React from 'react'

import SectionHeader from './section_header'
import Team from './team'

const TeamShowcase = () => {
  return (
    <div className="p-6 bg-red-700">
        <SectionHeader name="TEAMS"/>
        <div className="grid grid-cols-1 gap-6">
            <Team />
            <Team />
            <Team />
            <Team />
        </div>
    </div>
  )
}

export default TeamShowcase