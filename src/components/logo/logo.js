import React from 'react'

import './logo.css'

const Logo = () => {
  return (
        <h1 className="navbar-brand">
            <img className="logo-image" src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo"/>
            Art Liker
        </h1>
  )
}

export default Logo