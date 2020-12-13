import React, { useState, useRef, useLayoutEffect } from 'react'

import { ThemeProvider } from 'styled-components'

// import { darkTheme } from '../config/theme'
import '../config/translations'
import { GlobalStyle } from '../config/globalStyle'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import Router from '../config/router'

//Redux
import { Provider } from 'react-redux'
import { store } from '../config/store'
// import { darkTheme, lightTheme } from '../config/theme'

//firebase
import firebase from '../config/firebase'
function App() {
  React.useEffect(() => {
    const msg = firebase.messaging()
    msg
      .requestPermission()
      .then(() => {
        return msg.getToken()
      })
      .then(data => {
        console.warn('token', data)
      })
  })
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
            <Router></Router>
          </div>
        </>
      </ThemeProvider>
    </Provider>
  )
}

export default App
