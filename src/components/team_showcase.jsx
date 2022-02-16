import React from 'react'

import Team from './team'

const TeamShowcase = () => {
  return (
    <div className="grid grid-cols-3 p-16 gap-16 bg-red-800">
        <Team />
        <Team />
        <Team />
        <Team />
    </div>
  )
}

export default TeamShowcase