import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const NavBar = () => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full 
                    px-3 py-3
                    flex gap-6
                    bg-black
                    font-bold text-sm text-white
                    xs:text-lg
                    lg:text-xl">
      {[
        {
          tag: "HERO",
          link: "/#hero",
        },
        {
          tag: "EVENTS",
          link: "/#events",
        },
        {
          tag: "TEAMS",
          link: "/#teams",
        },
        {
          tag: "CREATORS",
          link: "/#creators",
        },
      ].map((navElement) => (
        <AnchorLink to={navElement.link}>
          <p className="hover:text-rose-800">{navElement.tag}</p>
        </AnchorLink>
      ))}
    </div>
  )
}

export default NavBar