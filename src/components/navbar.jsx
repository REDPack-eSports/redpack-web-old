import React from 'react'

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full 
                    px-8 py-3
                    flex gap-12
                    bg-gray-900 
                    font-bold text-2xl text-white">
      <h1 className="hover:text-red-800 hover:underline">HOME</h1>
      <h1 className="hover:text-red-800 hover:underline">TOURNAMENT</h1>
      <h1 className="hover:text-red-800 hover:underline">TEAMS</h1> 

    </div>
  )
}

export default NavBar