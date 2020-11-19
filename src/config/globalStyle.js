import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: lightgray;
  }

  a {
    text-decoration: none;
    color: white;
  }

`

export { GlobalStyle }
