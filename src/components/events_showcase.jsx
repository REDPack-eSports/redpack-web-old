import React from 'react'

import SectionHeader from './section_header'
import Tournament from './tournament'

const EventsShowcase = () => {
  return (
    <div className="bg-gray-900">
      <SectionHeader name="EVENTS" />
      <Tournament />
    </div>
  )
}

export default EventsShowcase