import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../../config/router'

import { useTranslation } from 'react-i18next'

import { StyledNav, StyledUl, StyledLink } from './Nav.styled'
import Language from '../language'

// eslint-disable-next-line no-unused-vars
const Header = props => {
  const { t } = useTranslation()

  return (
    <header>
      <Router>
        <StyledNav>
          <StyledUl>
            <StyledLink>
              <Link to='/'>{t('nav.home')}</Link>
            </StyledLink>
            <StyledLink>
              <Link to='/about'>{t('nav.about')}</Link>
            </StyledLink>
            {/* <StyledLink> */}
            <Language />
            {/* </StyledLink> */}
          </StyledUl>
        </StyledNav>

        <Routes></Routes>
      </Router>
    </header>
  )
}

export default Header
