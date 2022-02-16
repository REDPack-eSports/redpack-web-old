import React from 'react'

import { BsArrowDownShort } from "react-icons/bs"

const SectionHeader = (props) => {
  return (
    <div className="flex pt-3">
      <h1 className="text-6xl font-black pl-8 text-white">{props.name}</h1>
      <BsArrowDownShort className="text-6xl -ml-3 text-white" />
    </div>
  )
}

export default SectionHeader