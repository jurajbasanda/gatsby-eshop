
import React from "react"
import PropTypes from "prop-types"

import FirstBar from "./firstBar"
import Menu from "./Menu"
import Footer from './Footer'
import "./layout.scss"

const Layout = ({ children }) => {


  return (
    <>
    <FirstBar/>
    <Menu/>
        <main>{children}</main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
