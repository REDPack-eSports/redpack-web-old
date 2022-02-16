import React from 'react'

const Team = () => {
  return (
    <div className="text-center text-white font-bold my-auto p-3 bg-gray-900 py-8 rounded-xl">
        <h1 className="text-4xl text-left underline pl-8 mb-4">CS:GO</h1>
        <h1 className="text-5xl mb-4">Team Name</h1>
        <div className="flex flex-col gap-6">
            <h2 className="text-4xl">Player1</h2>
            <h2 className="text-4xl">Player2</h2>
            <h2 className="text-4xl">Player3</h2>
            <h2 className="text-4xl">Player4</h2>
            <h2 className="text-4xl">Player5</h2>
        </div>
    </div>
  )
}

export default Team