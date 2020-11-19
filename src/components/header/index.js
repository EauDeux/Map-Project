import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../../config/router'

import { StyledNav, StyledUl, StyledLink } from './Nav.styled'

// eslint-disable-next-line no-unused-vars
const Header = props => {
  return (
    <header>
      <Router>
        <StyledNav>
          <StyledUl>
            <StyledLink>
              <Link to='/'>Home</Link>
            </StyledLink>
            <StyledLink>
              <Link to='/about'>A propos de nous</Link>
            </StyledLink>
          </StyledUl>
        </StyledNav>

        <Routes></Routes>
      </Router>
    </header>
  )
}

export default Header
