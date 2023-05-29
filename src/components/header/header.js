import React from 'react'
import Logo from 'components/logo'
import Filter from 'components/filter'
import './header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
    <div className="container-fluid">
        <Logo/>
        <Filter/>
    </div>
    </nav>
  )
}

export default Header