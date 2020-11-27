import React from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import Routes from '../../config/router'

import { useTranslation } from 'react-i18next'

import { StyledNav, StyledUl, StyledLink } from './Nav.styled'
import Lang from '../lang'
import ThemeSelector from '../themeSelector'

const Header = ({ open }) => {
  const { t } = useTranslation()

  return (
    <header>
      <Router>
        <StyledNav open={open}>
          <StyledUl>
            <StyledLink>
              <Link to='/'>{t('nav.home')}</Link>
            </StyledLink>
            <StyledLink>
              <Link to='/about'>{t('nav.about')}</Link>
            </StyledLink>
            {/* <StyledLink> */}
            <Lang />
            <ThemeSelector />
            {/* </StyledLink> */}
          </StyledUl>
        </StyledNav>

        <Routes></Routes>
      </Router>
    </header>
  )
}

Header.propTypes = {
  open: PropTypes.bool.isRequired
}

export default Header
