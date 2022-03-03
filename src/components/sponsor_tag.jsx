import React from 'react'

const SponsorTag = (props) => {
  return (
    <div className="text-center text-xl font-semibold 
                    border-2 rounded-lg self-center px-3
                    hover:text-cyan-400 hover:border-cyan-400
                    xs:text-2xl xs:px-6
                    md:text-xl
                    lg:text-2xl
                    xl:text-3xl">
      <a href={props.link} target="_blank" rel="noreferrer">
        <p>
          {props.tag}
        </p>
      </a>
    </div>
  )
}

export default SponsorTag