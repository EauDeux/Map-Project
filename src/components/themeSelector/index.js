import React, { Fragment } from 'react'
import { darkTheme, lightTheme } from '../../config/theme'
import { StyledButton } from './ThemeSelector.styled'
import { useDispatch } from 'react-redux'
import { applyTheme } from '../../actions/theme'
import { ReactComponent as Sun } from '../../assets/svg/sun.svg'
import { ReactComponent as Moon } from '../../assets/svg/moon.svg'

const ThemeSelector = () => {
  const dispatch = useDispatch()
  // const theme = store.getState().theme.theme
  const changeTheme = (theme: any) => {
    // theme === 'light'
    //   ? dispatch(applyTheme(theme))
    //   : dispatch(applyTheme(theme))
    // if (theme === 'darkTheme') {
    //   dispatch(applyTheme(theme))
    //   // setTheme('darkTheme')
    // } else {
    // dispatch(applyTheme(theme))
    //   // setTheme('lightTheme')
    // }
    dispatch(applyTheme(theme))
    console.log(theme)
  }

  return (
    <>
      <StyledButton onClick={() => changeTheme(lightTheme)}>
        <Sun />
      </StyledButton>
      <StyledButton onClick={() => changeTheme(darkTheme)}>
        <Moon />
      </StyledButton>
    </>
  )
}

export default ThemeSelector
