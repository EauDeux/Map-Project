import React from 'react'
import { StyledBurgerMenu } from './BurgerMenu.styled'

import PropTypes from 'prop-types'

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurgerMenu>
  )
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default Burger
