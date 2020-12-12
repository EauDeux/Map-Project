import React from 'react'
import {
  StyledBurgerMenu,
  StyledDivOne,
  StyledDivTwo,
  StyledDivThree
} from './BurgerMenu.styled'

import PropTypes from 'prop-types'

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
      <StyledDivOne open={open} onClick={() => setOpen(!open)} />
      <StyledDivTwo open={open} onClick={() => setOpen(!open)} />
      <StyledDivThree open={open} onClick={() => setOpen(!open)} />
    </StyledBurgerMenu>
  )
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default Burger
