import React from 'react'
import { darkTheme, lightTheme } from '../../config/theme'
import { StyledButton } from './ThemeSelector.styled'
import { useDispatch } from 'react-redux'
import { applyTheme } from '../../actions/theme'
// import { theme } from '../../reducers/theme'
// import { store } from '../../config/store'

const ThemeSelector = () => {
  const dispatch = useDispatch()
  // const theme = store.getState().theme.theme
  const changeTheme = (theme: any) => {
    if (theme === 'darkTheme') {
      dispatch(applyTheme(theme))
      // setTheme('darkTheme')
    } else {
      dispatch(applyTheme(theme))
      // setTheme('lightTheme')
    }
    // dispatch(applyTheme(theme))
    console.log(theme)
  }

  return (
    <>
      {/* <div onClick={changeTheme}> */}
      {/* {theme === 'darkTheme' ? ( */}
      <StyledButton onClick={() => changeTheme(lightTheme)}>Light</StyledButton>
      {/* ) : ( */}
      <StyledButton onClick={() => changeTheme(darkTheme)}>Dark</StyledButton>
      {/* )} */}
      {/* </div> */}
    </>
  )
}

export default ThemeSelector
