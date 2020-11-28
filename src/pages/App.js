import React, { useState, useRef } from 'react'

import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import BurgerMenu from '../components/burgerMenu'
import { theme } from '../config/theme'
import '../config/translations'

import { GlobalStyle } from '../config/globalStyle'

import { useOnClickOutside } from '../hooks/useOnClickOutside'

function App() {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div ref={node}>
          <BurgerMenu open={open} setOpen={setOpen} />
          <Header open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
