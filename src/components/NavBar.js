import React from 'react';
import { NavLink } from 'react-router-dom';
// NavLink = superset of Link, adding styling attrs to rendered ele

const NavBar = () => {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
      <div className="container">
        {/* <a className="navbar-brand" href="/portfolio-app/#/">Jacqueline Lam</a> */}
        <NavLink
          className='navbar-brand'
          to="/"
          exact
        >Jacqueline Lam</NavLink>
        <div className="justify-content-end" id="navbarDefault" >
          <ul className="navbar-nav">
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/about"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/projects"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Portfolio</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to="/blog"
                exact
                activeStyle={{
                  color: '#bda38f'
                }}
              >Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;