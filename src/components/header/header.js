import React from 'react'
import Logo from 'components/logo'
import Filter from 'components/filter'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Logo/>
        <Filter/>
    </div>
    </nav>
  )
}

export default Header