import React from 'react'

const SponsorTag = (props) => {
  return (
    <div className="text-center text-xl font-semibold 
                    border-2 rounded-lg w-3/4 self-center
                    hover:text-cyan-400 hover:border-cyan-400">
      <a href={props.link}>
        <p>
          {props.tag}
        </p>
      </a>
    </div>
  )
}

export default SponsorTag