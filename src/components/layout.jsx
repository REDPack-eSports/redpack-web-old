import React from 'react'

import NavBar from './navbar'
import Footer from './footer'

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout