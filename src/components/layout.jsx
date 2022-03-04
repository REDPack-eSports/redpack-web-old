import React from 'react'

import NavBar from './NavBar'
// import Footer from './Footer'

const Layout = (props) => {
  return (
    <>
      <div className="bg-black text-white
                      w-full">
        <NavBar />
        <div className="flex flex-col">
          {props.children}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  )
}

export default Layout