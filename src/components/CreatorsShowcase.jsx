import React from 'react'

import SectionHeader from './SectionHeader'
import Creator from './Creator'

import creators from '../data/creators'

const CreatorsShowcase = () => {
  return (
    <div className="p-6 bg-black">
      <SectionHeader name="CREATORS" anchor="creators"/>
      <div className="grid grid-cols-1 gap-3
                      sm:grid-cols-2
                      lg:grid-cols-3
                      xl:grid-cols-4">
        {creators.map((creator) => (
          <Creator name={creator.name}
                   game={creator.game}
                   link={creator.link}
                   platform={creator.platform}
                   audience={creator.audience}
          />
        ))}
      </div>
    </div>
  )
}

export default CreatorsShowcase