import React from 'react'
import { darkTheme, lightTheme } from '../../config/theme'
import { StyledButton } from './ThemeSelector.styled'
import { useDispatch } from 'react-redux'
import { applyTheme } from '../../actions/theme'

const ThemeSelector = () => {
  const dispatch = useDispatch()

  const changeTheme = (theme: any) => {
    dispatch(applyTheme(theme))
    console.log(theme)
  }

  return (
    <>
      <StyledButton onClick={() => changeTheme(darkTheme)}>Dark</StyledButton>
      <StyledButton onClick={() => changeTheme(lightTheme)}>Light</StyledButton>
    </>
  )
}

export default ThemeSelector
