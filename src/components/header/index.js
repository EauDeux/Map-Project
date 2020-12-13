import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

import { StyledNav, StyledUl, StyledLink } from './Nav.styled'
import Lang from '../lang'
import ThemeSelector from '../themeSelector'
import Logout from '../logout'
import BurgerMenu from '../burgerMenu'

const Header = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  return (
    <>
      <BurgerMenu open={open} setOpen={setOpen} />
      <StyledNav open={open}>
        <StyledUl>
          <StyledLink>
            <Lang />
            <ThemeSelector />
            <Logout></Logout>
          </StyledLink>
          <StyledLink>
            <Link to='/'>{t('nav.home')}</Link>
          </StyledLink>
          <StyledLink>
            <Link to='/about'>{t('nav.about')}</Link>
          </StyledLink>
          <StyledLink>
            <Link to='/favoris'>{t('nav.favoris')}</Link>
          </StyledLink>
        </StyledUl>
      </StyledNav>
    </>
  )
}

Header.propTypes = {
  open: PropTypes.bool.isRequired
}

export default Header

//
//<Header open={open} setOpen={setOpen} />
