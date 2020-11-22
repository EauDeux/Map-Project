import React from 'react'

import { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import { theme } from '../config/theme'
import '../config/translations'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header></Header>
      </>
    </ThemeProvider>
  )
}

export default App
