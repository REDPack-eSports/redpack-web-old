import React from 'react'

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full 
                    px-3 py-3
                    flex gap-6
                    bg-black
                    font-bold text-sm text-white
                    xs:text-lg">
      {[
        {
          tag: "HOME",
          link: "/",
        },
        {
          tag: "EVENTS",
          link: "/",
        },
        {
          tag: "TEAMS",
          link: "/",
        },
        {
          tag: "CREATORS",
          link: "/",
        },
      ].map((navElement) => (
        <p className="hover:text-red-800 hover:underline">{navElement.tag}</p>
      ))}
    </div>
  )
}

export default NavBar