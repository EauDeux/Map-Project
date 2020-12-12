import React, { useState, useRef, useLayoutEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import BurgerMenu from '../components/burgerMenu'
import '../config/translations'
import { GlobalStyle } from '../config/globalStyle'
import { useOnClickOutside } from '../hooks/useOnClickOutside'

//Redux
import { Provider } from 'react-redux'
import { store } from '../config/store'
// import { darkTheme, lightTheme } from '../config/theme'

function App() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  // useSelector ne fonctionne pas à la racine d'une app
  // const theme = useSelector((state: any) => state.theme)
  const theme = store.getState().theme.theme
  console.log(theme)
  const [currentTheme, setTheme] = useState({})
  useLayoutEffect(() => {
    setTheme(theme)
  }, [theme])

  return (
    <Provider store={store}>
      <ThemeProvider theme={currentTheme}>
        <>
          <GlobalStyle />
          <div ref={node}>
            <BurgerMenu open={open} setOpen={setOpen} />
            <Header open={open} setOpen={setOpen} />
          </div>
        </>
      </ThemeProvider>
    </Provider>
  )
}

export default App
